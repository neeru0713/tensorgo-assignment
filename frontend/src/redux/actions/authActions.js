import axios from "axios";
import { REGISTER_SUCCESS, REGISTER_FAIL } from "../types";
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
