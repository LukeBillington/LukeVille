import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import luketopiaApp from './reducers';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(luketopiaApp, applyMiddleware(thunk));

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
