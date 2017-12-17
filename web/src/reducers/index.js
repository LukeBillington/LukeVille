import { combineReducers } from 'redux';
<<<<<<< HEAD
import user from './user';
import person from './person';
import rides from './rides';
import ride from './ride';

const luketopiaApp = combineReducers({
  user,
  person,
  rides,
  ride
=======
import rideReservations from './rideReservations';

const luketopiaApp = combineReducers({
  rideReservations
>>>>>>> 052ee7eb146448dfb177922c6d6e24f24c49dea4
});

export default luketopiaApp;
