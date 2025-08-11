import React from 'react';
import type { AppProps, ThemeMode } from '../types';

const readHostTheme = (): ThemeMode | undefined => {
  if (typeof document === 'undefined') return undefined;
  const theme = document.body.getAttribute('data-theme');
  return theme ?? undefined;
};

export const Home: React.FC<Pick<AppProps, 'hostState' | 'onHostIncrement' | 'onHostTextChange' | 'theme'>> = ({
  hostState,
  onHostIncrement,
  onHostTextChange,
  theme,
}) => {
  const effectiveTheme = theme ?? readHostTheme();
  return (
    <div>
      <div style={{ marginBottom: 8 }}>Theme: {effectiveTheme ?? '-'}</div>
      <div>Host count: {hostState?.count ?? '-'}</div>
      <div>Host text: {hostState?.text ?? '-'}</div>
      <button style={{ marginTop: 8 }} onClick={onHostIncrement}>Increment in host</button>
      <div style={{ marginTop: 8 }}>
        <input
          placeholder="Type to update host text"
          defaultValue={hostState?.text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onHostTextChange?.(e.target.value)}
        />
      </div>
    </div>
  );
};


