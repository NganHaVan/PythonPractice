import axios from "axios";
import { getError } from "./errorActions";

export const USER_LOADING = "USER_LOADING";
export const USER_LOADED = "USER_LOADED";
export const AUTH_ERROR = "AUTH_ERROR";

export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  // Get token from state
  const token = getState().auth.token;
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  // If token exists, add to headers
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }
  axios
    .get("/auth/profile", config)
    .then(res => {
      console.log({ data: res.data });
      dispatch({ type: USER_LOADED, payload: res.data });
    })
    .catch(err => {
      console.log({ err });
      err.response && dispatch(getError(err.response));
      dispatch({ type: AUTH_ERROR });
    });
};
