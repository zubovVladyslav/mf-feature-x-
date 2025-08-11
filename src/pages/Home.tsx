import React from 'react';
import type { AppProps, ThemeMode } from '../types';
import { getTheme, styles } from '../theme';

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
  const t = getTheme(effectiveTheme);
  return (
    <div style={styles.card(t)}>
      <div style={{ marginBottom: 8, color: t.textMuted }}>Theme: {effectiveTheme ?? '-'}</div>
      <div style={{ marginBottom: 4 }}>Host count: {hostState?.count ?? '-'}</div>
      <div>Host text: {hostState?.text ?? '-'}</div>
      <button style={{ marginTop: 12, ...styles.button(t) }} onClick={onHostIncrement}>Increment in host</button>
      <div style={{ marginTop: 12 }}>
        <input
          placeholder="Type to update host text"
          defaultValue={hostState?.text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onHostTextChange?.(e.target.value)}
          style={styles.input(t)}
        />
      </div>
    </div>
  );
};


