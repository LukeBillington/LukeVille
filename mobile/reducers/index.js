import { combineReducers } from 'redux';
import user from './user';
import person from './person';
import rides from './rides';
import ride from './ride';
import network from './network';

const luketopiaApp = combineReducers({
  user,
  person,
  rides,
  ride,
  network
});

export default luketopiaApp;
