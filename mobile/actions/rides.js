import axios from 'axios';

export const ridesHasErrored = bool => {
  return {
    type: 'RIDES_HAS_ERRORED',
    ridesHasErrored: bool
  }
}

export const ridesIsLoading = bool => {
  return {
    type: 'RIDES_IS_LOADING',
    ridesIsLoading: bool
  }
}

export const ridesFetchDataSuccess = rides => {
  return {
    type: 'RIDES_FETCH_DATA_SUCCESS',
    rides
  }
}

export const ridesFetchData = url => {
  return (dispatch) => {
    dispatch(ridesIsLoading(true));
    axios.get('http://localhost:8000/api/' + url)
    .then((rides) => {
      dispatch(ridesIsLoading(false));
      dispatch(ridesFetchDataSuccess(rides.data.data));
    })
    .catch(() => {
      dispatch(ridesHasErrored(true));
    });
  }

}
