import axios from 'axios';

export const rideHasErrored = bool => {
  return {
    type: 'RIDE_HAS_ERRORED',
    rideHasErrored: bool
  }
}

export const rideIsLoading = bool => {
  return {
    type: 'RIDE_IS_LOADING',
    rideIsLoading: bool
  }
}

export const rideFetchDataSuccess = ride => {
  return {
    type: 'RIDE_FETCH_DATA_SUCCESS',
    ride
  }
}

export const rideFetchData = url => {
  return (dispatch) => {
    dispatch(rideIsLoading(true));
    axios.get('http://localhost:8000/api/' + url)
    .then((ride) => {
      dispatch(rideIsLoading(false));
      dispatch(rideFetchDataSuccess(ride.data.data));
    })
    .catch(() => {
      dispatch(rideHasErrored(true));
    });
  }

}
