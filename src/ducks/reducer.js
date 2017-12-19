import axios from "axios";

const RETRIEVE_CHARS = "RETRIEVE_CHARS";

export function retrieveChars() {
  return {
    type: RETRIEVE_CHARS,
    payload: axios
      .get("https://swapi.co/api/people")
      .then(response => {
        console.log(response);
        return response.data;
      })
      .catch(err => err)
  };
}

const initialState = {
  characters: [],
  isLoading: false
};

export default function reducer(state = initialState, action) {
  console.log("ACTION TYPE", action.type);
  switch (action.type) {
    case `${RETRIEVE_CHARS}_PENDING`:
      return Object.assign({}, state, { isLoading: true });
    case `${RETRIEVE_CHARS}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        characters: action.payload
      });
    case `${RETRIEVE_CHARS}_REJECTED`:
      return Object.assign({}, state, {
        isLoading: false,
        didError: true,
        err: action.payload
      });
    default:
      return state;
  }
}
