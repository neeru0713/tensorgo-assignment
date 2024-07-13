import axios from "axios";
import { PLAN_SUCCESS, PLAN_FAIL } from "../types";
import { API_URL } from "../../config/config";
import { showNotification } from './notificationActions';
import {showSpinner, hideSpinner} from './spinnerActions'
export const createPlan = (planData) => async (dispatch, getState) => {
  try {
    dispatch(showSpinner('Creating new plan'))
    const state  = getState();
    const token = state.auth.token; 
    const res = await axios.post(API_URL + "/api/plan/", planData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch(hideSpinner())
    dispatch({ type: PLAN_SUCCESS, payload: res.data });
    dispatch(showNotification({type: 'success', message: res.data?.plan?.planName + ' Plan created successfully', sticky: true}))
  } catch (error) {
    console.error(error);
    dispatch(hideSpinner())
    dispatch({
      type: PLAN_FAIL,
      payload: error.response ? error.response.data : "An Error occured",
    });
    dispatch(showNotification({type: 'error', message: 'Plan creation Failed : ' + error.response.data.message,  sticky: true}))
  }
};


export const getPlans = () => async (dispatch) => {
  try{
    dispatch(showSpinner('Fetching plans'))
    const res = await axios.get(API_URL + "/api/plan/");
    dispatch(hideSpinner())
    dispatch({ type: PLAN_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch(hideSpinner())
    dispatch({
      type: PLAN_FAIL,
      payload: error.response ? error.response.data : "An Error occured",
    });
  }
}
