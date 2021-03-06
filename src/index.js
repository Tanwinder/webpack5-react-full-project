import 'regenerator-runtime/runtime';
import React from 'react';
import {render} from 'react-dom'

import App from './components/app'

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './store';


render(
  <Provider store={store} >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);