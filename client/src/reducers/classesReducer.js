import * as constants from "../constants";

export const initialState = {
  isFetching: false,
  classes: [],
  error: "",
};

function classesReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_CLASSES_START:
      return {
        ...state,
        isFetching: true,
      };
    case constants.FETCH_CLASSES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        classes: action.payload,
      };
    case constants.FETCH_CLASSES_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default classesReducer;
