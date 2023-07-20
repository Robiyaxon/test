import api from "../../utility/api";
import { getAction } from "./readAction";
import { GET_DEALS } from "./types";
export const deleteAction = (actionType, id) => async (dispatch) => {
  try {
    const res = await api.delete(`/deals/${id}`);
    dispatch({
      type: actionType,
      payload: res.data,
    });
      // dispatch(getAction(GET_DEALS));
  } catch (err) {
    console.log(err);
  }
};
