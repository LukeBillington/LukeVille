import { combineReducers } from 'redux';
import user from './user';
import person from './person';
import rides from './rides';
import ride from './ride';

const luketopiaApp = combineReducers({
  user,
  person,
  rides,
  ride
});

export default luketopiaApp;
