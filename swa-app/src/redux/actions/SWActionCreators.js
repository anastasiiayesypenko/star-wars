import types from "../types/types";
import starWarsAxiosInstance from "../../axiosInstance/starWarsAxiosInstance";

export const setSWListActionCreator = ({ page, tab }) => (dispatch) => {
  dispatch({ type: types.START_SW_LIST_LOADING });
  starWarsAxiosInstance
    .get(`/${tab}/?page=${page}`)
    .then(async (res) => {
      dispatch({
        type: types.SET_SW_LIST,
        payload: { [tab]: res.data },
      });
    })
    .catch((error) => {
      dispatch({ type: types.SET_SW_LIST_ERROR, payload: { error } });
    });
};

export const addSavedItemActionCreator = (item) => ({
  type: types.ADD_SAVED_ITEM,
  payload: { item },
});
