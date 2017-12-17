const rides = (state = [], action) => {
  switch(action.type) {
    case 'RIDES_HAS_ERRORED':
      return action.ridesHasErrored;
    case 'RIDES_IS_LOADING':
      return action.ridesIsLoading;
    case 'RIDES_FETCH_DATA_SUCCESS':
      return action.rides;
    default:
      return state;
  }
}

export default rides;
