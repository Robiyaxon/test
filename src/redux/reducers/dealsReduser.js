import { GET_DEALS, CREATE_DEALS } from "../actions/types";

const initialState = {
  data: [],
};

const DealsReduser = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_DEALS:
      return {
        ...state,
        data: payload,
      };
    case CREATE_DEALS:
      return {
        ...state,
        data: payload,
      };
    default:
      return state;
  }
};

export default DealsReduser;
