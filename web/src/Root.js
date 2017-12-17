import React from 'react';
import propTypes from 'prop-types';
import { Provider } from 'react-redux';
import Base from './Base';

const Root = ({ store }) => (
  <Provider store={ store }>
    <Base />
  </Provider>
);

Root.propTypes = {
  store: propTypes.object.isRequired
}

export default Root;
