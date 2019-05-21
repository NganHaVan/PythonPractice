import { GET_ERROR, RESET_ERROR } from "../actions/errorActions";

const initialState = {
  msg: {},
  status: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ERROR:
      return { msg: action.payload.data, status: action.payload.status };

    case RESET_ERROR:
      return initialState;

    default:
      return state;
  }
}
