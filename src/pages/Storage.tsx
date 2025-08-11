import React from 'react';
import type { AppProps, ThemeMode } from '../types';
import { getTheme, styles } from '../theme';

type KV = { key: string; value: string };

const readCookies = (): KV[] => {
  if (typeof document === 'undefined') return [];
  const raw = document.cookie || '';
  if (!raw) return [];
  return raw.split(';').map((c) => {
    const [k, ...rest] = c.split('=');
    return { key: decodeURIComponent(k.trim()), value: decodeURIComponent(rest.join('=') || '') };
  });
};

const readStorage = (storage: Storage | undefined): KV[] => {
  if (!storage) return [];
  const res: KV[] = [];
  for (let i = 0; i < storage.length; i += 1) {
    const k = storage.key(i);
    if (!k) continue;
    try {
      const v = storage.getItem(k) ?? '';
      res.push({ key: k, value: v });
    } catch {
      res.push({ key: k, value: '<unreadable>' });
    }
  }
  return res;
};

const Section: React.FC<{ title: string; items: KV[]; mode: ThemeMode | undefined }> = ({ title, items, mode }) => {
  const t = getTheme(mode);
  return (
    <div style={{ ...styles.card(t), marginTop: 12 }}>
      <div style={{ fontWeight: 600, marginBottom: 8 }}>{title}</div>
      {items.length === 0 ? (
        <div style={{ color: t.textMuted }}>No data</div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 8 }}>
          {items.map(({ key, value }) => (
            <React.Fragment key={`${title}-${key}`}>
              <div style={{ color: t.textMuted, overflowWrap: 'anywhere' }}>{key}</div>
              <pre style={{ margin: 0, whiteSpace: 'pre-wrap', overflowWrap: 'anywhere', color: t.text }}>{value}</pre>
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export const StoragePage: React.FC<Pick<AppProps, 'theme'>> = ({ theme }) => {
  const cookies = React.useMemo(() => readCookies(), []);
  const ls = React.useMemo(() => (typeof window !== 'undefined' ? readStorage(window.localStorage) : []), []);
  const ss = React.useMemo(() => (typeof window !== 'undefined' ? readStorage(window.sessionStorage) : []), []);

  return (
    <div>
      <Section title="Cookies" items={cookies} mode={theme} />
      <Section title="Local Storage" items={ls} mode={theme} />
      <Section title="Session Storage" items={ss} mode={theme} />
    </div>
  );
};


