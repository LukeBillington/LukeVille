const person = (state = [], action) => {
  switch(action.type) {
    case 'PERSON_HAS_ERRORED':
      return action.personHasErrored;
    case 'PERSON_IS_LOADING':
      return action.personIsLoading;
    case 'PERSON_FETCH_DATA_SUCCESS':
      return action.person;
    default:
      return state;
  }
}

export default person;
