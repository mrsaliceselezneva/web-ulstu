import { BrowserRouter } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import 'macro-css'
import { Provider } from 'react-redux';

import App from './App';
import storeMax from "./reduxMessage/store"

import {store} from './redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} store={storeMax}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

