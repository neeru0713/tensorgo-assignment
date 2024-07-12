import axios from "axios";
import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL } from "../types";
import { API_URL } from "../../config/config";

export const register = (credentials) => async (dispatch) => {
  try {
    const res = await axios.post(API_URL + "/api/auth/register", credentials);
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
  } catch (error) {
    console.error(error);
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response ? error.response.data : "An Error occured",
    });
  }
};

export const login = (credentials) => async (dispatch) => {
  try {
    const res = await axios.post(API_URL + "/api/auth/login", credentials);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
  } catch (error) {
    console.error(error);
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response ? error.response.data : "An Error occured",
    });
  }
};
