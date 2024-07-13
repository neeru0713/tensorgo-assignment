import {
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  ADD_CHECKOUT_ITEM,
  REMOVE_CHECKOUT_ITEM,
  PAY_NOW,
} from "../types";
import { API_URL } from "../../config/config";
import axios from "axios";
import { showNotification } from "./notificationActions";
import { showSpinner, hideSpinner } from "./spinnerActions";

export const addCartItem = (data) => async (dispatch) => {
  dispatch({ type: ADD_CART_ITEM, payload: data });
};

export const removeCartItem = (data, index) => async (dispatch) => {
  dispatch({ type: REMOVE_CART_ITEM, payload: { data, index } });
};

export const addCheckoutItem = (data) => async (dispatch) => {
  dispatch({ type: ADD_CHECKOUT_ITEM, payload: data });
};

export const removeCheckoutItem = (data, index) => async (dispatch) => {
  dispatch({ type: REMOVE_CHECKOUT_ITEM, payload: { data, index } });
};

export const payNow = (data) => async (dispatch, getState) => {
  try {
    dispatch(showSpinner("Redirecting to payment link"));
    const token = getState().auth.token;
    const res = await axios.post(
      API_URL + "/api/payment/checkout",
      {
        data,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(hideSpinner());
    if (res?.data?.url) {
      window.location.href = res.data.url;
      dispatch(
        showNotification({
          type: "success",
          message: "success",
          sticky: true,
        })
      );
    }
  } catch (error) {
    console.error(error);
    dispatch(hideSpinner());
    dispatch({
      type: PAY_NOW,
      payload: error.response ? error.response.data : "An Error occured",
    });

    dispatch(
      showNotification({
        type: "error",
        message:
          "fail " + error.response.data?.message || error.response.data?.error,
        sticky: true,
      })
    );
  }
};
