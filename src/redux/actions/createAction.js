import api from "../../utility/api";
import { CREATE_DEALS, GET_DEALS } from "./types";

export const createAction = (data) => async (dispatch) => {
  // try {
    const res = await api.post("/deals", data);
    dispatch({
      type: CREATE_DEALS,
      payload: res.data,
    });
    // dispatch(getAction(GET_DEALS));
  // } catch (err) {
  //   console.log(err);
  // }
};
