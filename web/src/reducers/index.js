import { combineReducers } from 'redux';
import user from './user';
import rides from './rides';
import ride from './ride';

const luketopiaApp = combineReducers({
  user,
  rides,
  ride
});

export default luketopiaApp;
