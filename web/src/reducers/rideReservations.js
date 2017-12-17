const rideReservations = (state = [], action) => {
  switch(action.type) {
    case 'ADD_RIDE_RESERVATION':
      return [
        ...state,
        {
          data: action.data
        }
      ];
    default:
      return state;
  }
}

export default rideReservations;
