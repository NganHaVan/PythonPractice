export const CREATE_MESSAGE = "CREATE_MESSAGE";

export const createMessage = msg => {
  return { type: CREATE_MESSAGE, payload: msg };
};
