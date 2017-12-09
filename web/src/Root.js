import React from 'react';
import PropTypes from 'prop-types'
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

Root.PropTypes = {
  store: PropTypes.object.isRequired
}

export default Root;
