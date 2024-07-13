import {
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  ADD_CHECKOUT_ITEM,
  REMOVE_CHECKOUT_ITEM,
} from "../types";

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
