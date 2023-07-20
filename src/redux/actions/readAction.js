import api from "../../utility/api";

export const getAction = (actionType) => async (dispatch) => {
  try {
    const res = await api.get('/deals');
    dispatch({
      type: actionType,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
