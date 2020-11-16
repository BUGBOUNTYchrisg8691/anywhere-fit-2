import { axiosWithAuth } from "./axiosWithAuth";
import * as types from "../constants";

export const fetchClasses = () => async (dispatch) => {
  dispatch({ type: types.FETCH_CLASSES_START });
  await axiosWithAuth()
    .get("http://localhost:5000/api/classes")
    .then((res) => {
      dispatch({
        type: types.FETCH_CLASSES_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: types.FETCH_CLASSES_FAILURE,
        payload: err.message,
      });
    });
};
