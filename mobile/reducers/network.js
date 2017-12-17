const initialState = {
  isConnected: false,
};

const network = (state = initialState, action) => {
  switch(action.type) {
    case 'UPDATE_CONNECTION_STATUS':
      return Object.assign({}, state, {
        isConnected: action.isConnected,
      });
    default:
      return state;
  }
}

export default network;
