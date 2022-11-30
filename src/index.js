import { BrowserRouter } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import 'macro-css'
import { Provider } from 'react-redux';

import App from './App';
import storeMax from "./reduxMessage/storeMax"

import {store} from './redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} sroreMax={storeMax}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

