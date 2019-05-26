import axios from "axios";
import { getError } from "./errorActions";

export const USER_LOADING = "USER_LOADING";
export const USER_LOADED = "USER_LOADED";
export const AUTH_ERROR = "AUTH_ERROR";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAIL = "LOGOUT_FAIL";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

export const tokenConfig = getState => {
  let token = getState().auth.token;
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  if (token) {
    config.headers["Authorization"] =
      `Token ${token}` || localStorage.getItem("token");
  }
  return config;
};

export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });
  axios
    .get("/auth/profile", tokenConfig(getState))
    .then(res => {
      dispatch({ type: USER_LOADED, payload: res.data });
    })
    .catch(err => {
      console.log({ err });
      dispatch({ type: AUTH_ERROR });
    });
};

export const logIn = ({ username, password }) => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });
  const body = JSON.stringify({ username, password });

  axios
    .post("/auth/login", body, tokenConfig(getState))
    .then(res => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch(err => {
      err.response && dispatch(getError(err.response));
      dispatch({ type: LOGIN_FAIL });
    });
};

export const logout = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });
  axios
    .post("/auth/logout", null, tokenConfig(getState))
    .then(res => dispatch({ type: LOGOUT_SUCCESS }))
    .catch(err => {
      err.response && dispatch(getError(err.response));
      dispatch({ type: LOGOUT_FAIL });
    });
};

export const register = ({ username, email, password }) => (
  dispatch,
  getState
) => {
  dispatch({ type: USER_LOADING });
  const body = JSON.stringify({ username, email, password });
  axios
    .post("/auth/register", body, tokenConfig(getState))
    .then(res => {
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log({ err });
      err.response && dispatch(getError(err.response));
      dispatch({ type: REGISTER_FAIL });
    });
};
