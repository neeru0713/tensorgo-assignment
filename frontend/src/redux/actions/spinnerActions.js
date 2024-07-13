import { SHOW_SPINNER, HIDE_SPINNER } from "../types";

export const showSpinner = () => async (dispatch) => {
  dispatch({ type: SHOW_SPINNER, payload: {} });
};

export const hideSpinner = () => async (dispatch) => {
  dispatch({ type: HIDE_SPINNER, payload: {} });
};
