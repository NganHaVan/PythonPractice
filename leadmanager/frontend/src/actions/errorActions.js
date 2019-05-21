export const GET_ERROR = "GET_ERROR";
export const RESET_ERROR = "RESET_ERROR";

export const getError = payload => {
  return { type: GET_ERROR, payload };
};

export const resetError = () => {
  return { type: RESET_ERROR };
};
