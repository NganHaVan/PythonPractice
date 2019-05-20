import axios from "axios";
export const GET_LEADS = "GET_LEADS";
export const DELETE_LEAD = "DELETE_LEAD";
export const ADD_LEAD = "ADD_LEAD";

export const getLeads = () => dispatch => {
  axios
    .get("/api/leads")
    .then(res => {
      dispatch({
        type: GET_LEADS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const addLead = info => dispatch => {
  axios
    .post("/api/leads/", info)
    .then(res => dispatch({ type: ADD_LEAD, payload: res.data }))
    .catch(err => console.log({ err }));
};

export const deleteLead = id => dispatch => {
  axios
    .delete(`/api/leads/${id}`)
    .then(res => dispatch({ type: DELETE_LEAD, id }))
    .catch(err => console.log(err));
};
