export type HostState = {
  count: number;
  text: string;
};

export type ThemeMode = 'light' | 'dark' | string;

export type AppProps = {
  hostState?: HostState;
  onHostIncrement?: () => void;
  onHostTextChange?: (value: string) => void;
  theme?: ThemeMode;
};


