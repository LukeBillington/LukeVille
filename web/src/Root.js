import React from 'react';
import propTypes from 'prop-types'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import HomeView from './components/views/home';
import ReservationsView from './components/views/reservations';
import PersonView from './components/views/person';
import RidesView from './components/views/rides';
import RideView from './components/views/ride';
import RideReserveView from './components/views/rideReserve';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/reservations" component={ReservationsView} />
        <Route exact path="/person/:id" component={PersonView} />
        <Route exact path="/rides" component={RidesView} />
        <Route exact path="/rides/:id" component={RideView} />
        <Route exact path="/rides/:id/reserve" component={RideReserveView} />
      </div>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: propTypes.object.isRequired
}

export default Root;
