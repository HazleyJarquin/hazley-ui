import React from 'react';

function App({ children }: { children: any }) {
  return (
    <React.StrictMode>
      <main>{children}</main>
    </React.StrictMode>
  );
}

export default App;
