import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './JS/store/Store';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'

import App from './App';


ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
 <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')
);


