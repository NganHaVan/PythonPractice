import axios from "axios";
import { getError, resetError } from "./errorActions";
import { createMessage } from "./messageActions";
import { tokenConfig } from "./authActions";

export const GET_LEADS = "GET_LEADS";
export const DELETE_LEAD = "DELETE_LEAD";
export const ADD_LEAD = "ADD_LEAD";

export const getLeads = () => (dispatch, getState) => {
  axios
    .get("/api/leads", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_LEADS,
        payload: res.data
      });
      dispatch(resetError());
    })
    .catch(err => {
      if (err.response) {
        err.response && dispatch(getError(err.response));
      } else {
        console.log({ err });
      }
    });
};

export const addLead = info => (dispatch, getState) => {
  axios
    .post("/api/leads/", info, tokenConfig(getState))
    .then(res => {
      dispatch({ type: ADD_LEAD, payload: res.data });
      dispatch(createMessage({ leadCreated: "Lead created" }));
      dispatch(resetError());
    })
    .catch(err => {
      if (err.response) {
        dispatch(getError(err.response));
      } else {
        console.log({ err });
      }
    });
};

export const deleteLead = id => (dispatch, getState) => {
  axios
    .delete(`/api/leads/${id}`, tokenConfig(getState))
    .then(res => {
      dispatch({ type: DELETE_LEAD, id });
      dispatch(createMessage({ leadDeleted: "Lead Deleted" }));
      dispatch(resetError());
    })
    .catch(err => {
      if (err.response) {
        err.response && dispatch(getError(err.response));
      } else {
        console.log({ err });
      }
    });
};
