import type { ThemeMode } from './types';

export type ThemeTokens = {
  background: string;
  surface: string;
  text: string;
  textMuted: string;
  border: string;
  primary: string;
  primaryText: string;
  focus: string;
  inputBg: string;
  inputText: string;
  inputBorder: string;
  navBg: string;
};

export const getTheme = (mode: ThemeMode | undefined): ThemeTokens => {
  const m = String(mode ?? 'light').toLowerCase();
  if (m === 'dark') {
    return {
      background: '#0b0d10',
      surface: '#151a20',
      text: '#f6f7f9',
      textMuted: '#c2c8d0',
      border: '#2a323d',
      primary: '#4f8cff',
      primaryText: '#0b0d10',
      focus: '#7aa2ff',
      inputBg: '#0f1419',
      inputText: '#e9edf2',
      inputBorder: '#2a323d',
      navBg: '#10151b'
    };
  }
  return {
    background: '#ffffff',
    surface: '#f5f7fa',
    text: '#111111',
    textMuted: '#4b5563',
    border: '#e5e7eb',
    primary: '#2563eb',
    primaryText: '#ffffff',
    focus: '#3b82f6',
    inputBg: '#ffffff',
    inputText: '#111111',
    inputBorder: '#d1d5db',
    navBg: '#f3f4f6'
  };
};

export const styles = {
  container: (t: ThemeTokens): React.CSSProperties => ({
    padding: 16,
    color: t.text,
    backgroundColor: t.background,
    minHeight: '100%'
  }),
  header: (t: ThemeTokens): React.CSSProperties => ({
    marginBottom: 12,
    fontWeight: 600,
    color: t.text
  }),
  card: (t: ThemeTokens): React.CSSProperties => ({
    backgroundColor: t.surface,
    border: `1px solid ${t.border}`,
    borderRadius: 10,
    padding: 16
  }),
  nav: (t: ThemeTokens): React.CSSProperties => ({
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    padding: '8px 12px',
    backgroundColor: t.navBg,
    border: `1px solid ${t.border}`,
    borderRadius: 10,
    marginBottom: 12
  }),
  link: (t: ThemeTokens, active: boolean): React.CSSProperties => ({
    color: active ? t.primary : t.text,
    textDecoration: 'none',
    fontWeight: active ? 600 : 400
  }),
  button: (t: ThemeTokens): React.CSSProperties => ({
    backgroundColor: t.primary,
    color: t.primaryText,
    border: 'none',
    borderRadius: 8,
    padding: '8px 12px',
    cursor: 'pointer'
  }),
  input: (t: ThemeTokens): React.CSSProperties => ({
    backgroundColor: t.inputBg,
    color: t.inputText,
    border: `1px solid ${t.inputBorder}`,
    borderRadius: 8,
    padding: '8px 10px',
    outline: 'none',
    width: '100%'
  })
};



