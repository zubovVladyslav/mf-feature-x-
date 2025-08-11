import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Nav } from './components/Nav';
import { Home } from './pages/Home';
import { Details } from './pages/Details';
import type { AppProps, ThemeMode } from './types';

const readHostTheme = (): ThemeMode | undefined => {
  if (typeof document === 'undefined') return undefined;
  const theme = document.body.getAttribute('data-theme');
  return theme ?? undefined;
};

const App: React.FC<AppProps> = ({ theme, hostState, onHostIncrement, onHostTextChange }) => {
  const effectiveTheme: ThemeMode = theme || readHostTheme() || 'light';
  const isDark = String(effectiveTheme).toLowerCase() === 'dark';
  const containerStyle: React.CSSProperties = {
    padding: 16,
    color: isDark ? '#f6f7f9' : '#111',
    backgroundColor: isDark ? '#0b0d10' : '#ffffff',
    minHeight: '100%'
  };

  return (
    <div style={containerStyle} data-remote-theme={effectiveTheme}>
      <div style={{ marginBottom: 8 }}>Feature X Remote (v1.0.0) from feature-x</div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home theme={effectiveTheme} hostState={hostState} onHostIncrement={onHostIncrement} onHostTextChange={onHostTextChange} />} />
        <Route path="details" element={<Details theme={effectiveTheme} hostState={hostState} />} />
      </Routes>
    </div>
  );
};

export default App;


