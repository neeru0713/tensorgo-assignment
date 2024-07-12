import { REGISTER_SUCCESS } from '../types';


export const register = (credentials) => async (dispatch) => {
  try {
    console.log("credentials : ", credentials)
    let res = {
      data: {user: credentials.username}
    }
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
  } catch (error) {
   console.log(error)
  }
};
