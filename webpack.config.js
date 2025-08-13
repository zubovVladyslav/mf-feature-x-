// comments: remote config for module federation
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { container, DefinePlugin } = require('webpack');
const { ModuleFederationPlugin } = container;

module.exports = (_env, argv) => {
  const isDev = argv.mode !== 'production';

  return {
    entry: './src/index.tsx',
    mode: isDev ? 'development' : 'production',
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: 'auto',
      clean: true,
      filename: '[name].[contenthash].js',
      crossOriginLoading: 'anonymous'
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
      rules: [
        {
          test: /\.(tsx?|jsx?)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', { targets: 'last 2 Chrome versions' }],
                '@babel/preset-react',
                '@babel/preset-typescript'
              ]
            }
          }
        }
      ]
    },
    plugins: [
      new DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(isDev ? 'development' : 'production')
      }),
      new ModuleFederationPlugin({
        // IMPORTANT: name must match mfScope in host
        name: 'featureX',
        filename: 'remoteEntry.js',
        exposes: {
          './App': './src/App' //IMPORTANT: path must match mfModule=./App
        },
        shared: {
          react: { singleton: true, requiredVersion: '^18.3.1', strictVersion: true },
          'react-dom': { singleton: true, requiredVersion: '^18.3.1', strictVersion: true },
          'react-router': { singleton: true, requiredVersion: '^6.23.1', strictVersion: true },
          'react-router-dom': { singleton: true, requiredVersion: '^6.23.1', strictVersion: true }
        }
      }),
      new HtmlWebpackPlugin({
        template: './public/index.html'
      })
    ],
    devServer: {
      port: 3001,
      historyApiFallback: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': '*'
      },
      hot: true
    },
    devtool: isDev ? 'source-map' : false
  };
};


