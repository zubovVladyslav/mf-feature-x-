import React from 'react';
import type { AppProps } from '../types';
import { getTheme, styles } from '../theme';

export const Details: React.FC<Pick<AppProps, 'hostState' | 'theme'>> = ({ hostState, theme }) => {
  const t = getTheme(theme);
  return (
    <div style={styles.card(t)}>
      <div>Details page inside remote</div>
      <div style={{ marginTop: 8, color: t.textMuted }}>Theme: {theme ?? '-'}</div>
      <div style={{ marginTop: 8 }}>Echo text: {hostState?.text ?? '-'}</div>
      <abbr>(test reset file from host)</abbr>
    </div>
  );
};


