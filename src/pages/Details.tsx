import React from 'react';
import type { AppProps } from '../types';

export const Details: React.FC<Pick<AppProps, 'hostState' | 'theme'>> = ({ hostState, theme }) => {
  return (
    <div>
      <div>Details page inside remote</div>
      <div style={{ marginTop: 8 }}>Theme: {theme ?? '-'}</div>
      <div style={{ marginTop: 8 }}>Echo text: {hostState?.text ?? '-'}</div>
    </div>
  );
};


