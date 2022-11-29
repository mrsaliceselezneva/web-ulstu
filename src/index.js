import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import 'macro-css'
import App from './App';
import { Provider } from 'react-redux';
import store from "./reduxMessage/store"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

