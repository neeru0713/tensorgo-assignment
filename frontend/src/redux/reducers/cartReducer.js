import {
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  ADD_CHECKOUT_ITEM,
  REMOVE_CHECKOUT_ITEM,
  PAY_NOW
} from "../types";

const initialState = {
  cart: [],
  checkout: [],
  totalAmount: 0,
  checkoutLength: 0,
  cartLength: 0,
};

const calculateTotalAmount = (state, item, type) => {
  let total = 0;
  if (item.price === "Free") {
    total = state.totalAmount;
  } else {
    const amt = parseInt(item.price);
    if (type === "add") {
      total = state.totalAmount + amt;
    } else {
      total = state.totalAmount - amt;
    }
  }
  return total;
};

const removeCartItem = (state, index) => {
  return state.cart.filter((item, i) => i !== index);
};

const removeCheckoutItem = (state, index) => {
  return state.checkout.filter((item, i) => i !== index);
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART_ITEM:
      return {
        ...state,
        cart: [...state.cart, action.payload],
        cartLength: state.cartLength + 1,
      };
    case REMOVE_CART_ITEM:
      return {
        ...state,
        cart: removeCartItem(state, action.payload.index),
        cartLength: state.cartLength - 1,
      };
    case ADD_CHECKOUT_ITEM:
      return {
        ...state,
        checkout: [...state.checkout, action.payload],
        checkoutLength: state.checkoutLength + 1,
        totalAmount: calculateTotalAmount(state, action.payload, "add"),
      };
    case REMOVE_CHECKOUT_ITEM:
      return {
        ...state,
        checkout: removeCheckoutItem(state, action.payload.index),
        checkoutLength: state.checkoutLength - 1,
        totalAmount: calculateTotalAmount(state, action.payload.data, "remove"),
      };
      case PAY_NOW:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default cartReducer;
