import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import luketopiaApp from './reducers';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(luketopiaApp);

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
