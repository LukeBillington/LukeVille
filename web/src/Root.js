import React from 'react';
<<<<<<< HEAD
import propTypes from 'prop-types';
import { Provider } from 'react-redux';
import Base from './Base';

const Root = ({ store }) => (
  <Provider store={ store }>
    <Base />
  </Provider>
);
=======
import propTypes from 'prop-types'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import App from './App';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/:filter?" component={App} />
    </Router>
  </Provider>
)
>>>>>>> 052ee7eb146448dfb177922c6d6e24f24c49dea4

Root.propTypes = {
  store: propTypes.object.isRequired
}

export default Root;
