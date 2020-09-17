import types from "../types/types";

const initialState = {
  error: null,
  loading: true,
  planets: {},
  starships: {},
};

const SWListsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.START_SW_LIST_LOADING:
      return { ...state, loading: true };
    case types.SET_SW_LIST:
      return payload.planets
        ? {
            ...state,
            planets: payload.planets,
            loading: false,
          }
        : {
            ...state,
            starships: payload.starships,
            loading: false,
          };
    case types.SET_SW_LIST_ERROR:
      return { ...state, error: payload.error, loading: false };
    case types.RESET_SW_LIST:
      return { ...state, planets: {}, starships: {} };
    default:
      return state;
  }
};

export default SWListsReducer;
