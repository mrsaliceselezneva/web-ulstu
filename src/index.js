import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import 'macro-css'
import App from './App';

// лучше в проект настроить линтер (eslint) и форматер (prettier) что бы подсвечивались ошибки и код форматировался автоматом

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

