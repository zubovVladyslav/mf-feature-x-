import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Nav } from './components/Nav';
import { Home } from './pages/Home';
import { Details } from './pages/Details';
import { StoragePage } from './pages/Storage';
import type { AppProps, ThemeMode } from './types';
import { getTheme, styles } from './theme';

const readHostTheme = (): ThemeMode | undefined => {
  if (typeof document === 'undefined') return undefined;
  const theme = document.body.getAttribute('data-theme');
  return theme ?? undefined;
};

const App: React.FC<AppProps> = ({ theme, hostState, onHostIncrement, onHostTextChange }) => {
  const effectiveTheme: ThemeMode = theme || readHostTheme() || 'light';
  const t = getTheme(effectiveTheme);

  return (
    <div style={styles.container(t)} data-remote-theme={effectiveTheme}>
      <div style={styles.header(t)}>Feature X Remote (v1.0.0) from feature-x</div>
      <Nav theme={effectiveTheme} />
      <Routes>
        <Route path="/" element={<Home theme={effectiveTheme} hostState={hostState} onHostIncrement={onHostIncrement} onHostTextChange={onHostTextChange} />} />
        <Route path="details" element={<Details theme={effectiveTheme} hostState={hostState} />} />
        <Route path="storage" element={<StoragePage theme={effectiveTheme} />} />
      </Routes>
    </div>
  );
};

export default App;


