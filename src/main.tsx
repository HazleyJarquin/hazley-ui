import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import '../src/index.css';
import { NewButton } from './components/NewButton';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App>
      <NewButton title="hi" />
    </App>
  </React.StrictMode>
);
