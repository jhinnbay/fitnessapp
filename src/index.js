import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom'

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

/*Browser Router uses the HTML5 history API(pushState, replaceState, 
and the popstate event) to keep our UI in sync with the URL. */
root.render(
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>,
  );