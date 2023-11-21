import React from 'react';
import ReactDOM from 'react-dom/client';

// import AppToDo from './components/AppToDo';
import AppQuery from './components/AppQuery';

import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppQuery />
  </React.StrictMode>,
);
