# MF Feature X Remote

A minimal React 18 + Webpack 5 Module Federation remote for microfrontend experiments.

Local Development
- npm install
- npm start (http://localhost:3001)

Host Integration
- mfUrl: http://localhost:3001/remoteEntry.js
- mfScope: featureX
- mfModule: ./App

Build
- npm run build (dist/remoteEntry.js)
