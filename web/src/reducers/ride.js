const ride = (state = [], action) => {
  switch(action.type) {
    case 'RIDE_HAS_ERRORED':
      return action.rideHasErrored;
    case 'RIDE_IS_LOADING':
      return action.rideIsLoading;
    case 'RIDE_FETCH_DATA_SUCCESS':
      return action.ride;
    default:
      return state;
  }
}

export default ride;
