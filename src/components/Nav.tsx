import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { getTheme, styles } from '../theme';
import type { ThemeMode } from '../types';

export const Nav: React.FC<{ theme?: ThemeMode }> = ({ theme }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const t = getTheme(theme);
  return (
    <nav style={styles.nav(t)}>
      <Link to="." style={styles.link(t, pathname === '/' || pathname.endsWith('/mf-test'))}>Home</Link>
      <span style={{ color: t.textMuted }}>|</span>
      <Link to="details" style={styles.link(t, pathname.endsWith('/details'))}>Details</Link>
      <span style={{ color: t.textMuted }}>|</span>
      <button type="button" onClick={() => navigate('/exchange')} style={styles.button(t)}>
        Go to /exchange
      </button>
    </nav>
  );
};


