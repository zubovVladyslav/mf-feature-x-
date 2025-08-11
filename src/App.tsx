import React from 'react';

export type HostState = {
  count: number;
  text: string;
};

export type AppProps = {
  hostState?: HostState;
  onHostIncrement?: () => void;
  onHostTextChange?: (value: string) => void;
};

const App: React.FC<AppProps> = ({ hostState, onHostIncrement, onHostTextChange }) => {
  return (
    <div style={{ padding: 16, color: 'white' }}>
      <div style={{ marginBottom: 8 }}>Feature X Remote (v1.0.0) from feature-x</div>
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

export default App;


