import axios from "axios";

// action types
export const FETCH_CHARACTER_START = "FETCH_CHARACTER_START";
export const FETCH_CHARACTER_SUCCESS = "FETCH_CHARACTER_SUCCESS";
export const FETCH_CHARACTER_FAILURE = "FETCH_CHARACTER_FAILURE";

// action creators (async)
export const fetchCharacters = () => {
  return (dispatch) => {
    // do async actions here
    dispatch({ type: FETCH_CHARACTER_START });
    // console.log("dispatch: ", dispatch)
    // fetch data
    axios
      .get("https://www.swapi.tech/api/people")
      .then((res) => {
        // console.log("response: ", res.data.result)
        dispatch({ type: FETCH_CHARACTER_SUCCESS, payload: res.data.results });
      })
      .catch((err) => {
        // console.log(err.message);
        dispatch({ type: FETCH_CHARACTER_FAILURE, payload: err.message });
      });
  };
};