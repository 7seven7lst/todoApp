import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { browserHistory, Router } from 'react-router';
import routes from './routes.js';
import configureStore from './configureStore';

render(
  <Router history={browserHistory} routes={routes} />, 
  document.getElementById('root')
);
