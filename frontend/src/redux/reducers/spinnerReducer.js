import { SHOW_SPINNER, HIDE_SPINNER } from "../types";

const initialState = {
  show: false,
};

const spinnerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SPINNER:
      return {
        show: true,
      };
    case HIDE_SPINNER:
      return {
        show: false,
      };
    default:
      return state;
  }
};

export default spinnerReducer;
