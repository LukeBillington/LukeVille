import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
<<<<<<< HEAD
import luketopiaApp from './reducers';
import thunk from 'redux-thunk';
=======
import thunk from 'redux-thunk';
import luketopiaApp from './reducers';
>>>>>>> 052ee7eb146448dfb177922c6d6e24f24c49dea4
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

let store = createStore(luketopiaApp, applyMiddleware(thunk));

ReactDOM.render(
<<<<<<< HEAD
  <Root store={ store } />,
=======
  <Root store={store} />,
>>>>>>> 052ee7eb146448dfb177922c6d6e24f24c49dea4
  document.getElementById('root')
);
registerServiceWorker();
