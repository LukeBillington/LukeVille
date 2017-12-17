import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import luketopiaApp from './reducers';
import thunk from 'redux-thunk';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

let store = createStore(luketopiaApp, applyMiddleware(thunk));

ReactDOM.render(
  <Root store={ store } />,
  document.getElementById('root')
);
registerServiceWorker();
