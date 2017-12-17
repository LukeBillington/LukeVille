import axios from 'axios';

export const personHasErrored = bool => {
  return {
    type: 'PERSON_HAS_ERRORED',
    personHasErrored: bool
  }
}

export const personIsLoading = bool => {
  return {
    type: 'PERSON_IS_LOADING',
    personIsLoading: bool
  }
}

export const personFetchDataSuccess = person => {
  return {
    type: 'PERSON_FETCH_DATA_SUCCESS',
    person
  }
}

export const personFetchData = url => {
  return (dispatch) => {
    dispatch(personIsLoading(true));
    axios.get('http://localhost:8000/api/' + url)
    .then((person) => {
      dispatch(personIsLoading(false));
      dispatch(personFetchDataSuccess(person.data.data));
    })
    .catch(() => {
      dispatch(personHasErrored(true));
    });
  }
}
