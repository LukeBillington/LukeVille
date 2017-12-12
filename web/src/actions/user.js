import axios from 'axios';

export const userHasErrored = bool => {
  return {
    type: 'USER_HAS_ERRORED',
    userHasErrored: bool
  }
}

export const userIsLoading = bool => {
  return {
    type: 'USER_IS_LOADING',
    userIsLoading: bool
  }
}

export const userFetchDataSuccess = user => {
  return {
    type: 'USER_FETCH_DATA_SUCCESS',
    user
  }
}

export const userFetchData = url => {
  return (dispatch) => {
    dispatch(userIsLoading(true));
    axios.get('http://localhost:8000/api/' + url)
    .then((user) => {
      dispatch(userIsLoading(false));
      dispatch(userFetchDataSuccess(user.data.data));
    })
    .catch(() => {
      dispatch(userHasErrored(true));
    });
  }

}
