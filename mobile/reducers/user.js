const user = (state = [], action) => {
  switch(action.type) {
    case 'USER_HAS_ERRORED':
      return action.userHasErrored;
    case 'USER_IS_LOADING':
      return action.userIsLoading;
    case 'USER_FETCH_DATA_SUCCESS':
      return action.user;
    default:
      return state;
  }
}

export default user;
