import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa6";
import { payNow, removeCheckoutItem } from "../../redux/actions/cartActions";
export const Checkout = () => {
  const checkout = useSelector((state) => state.cart.checkout);
  const checkoutLength = useSelector((state) => state.cart.checkoutLength);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  return (
    checkoutLength > 0 && (
      <div className="checkout-wrapper p-10 bg-white rounded-lg fixed top-[12%] shadow shadow-lg shadow-gray-200">
        <h1 className="text-orange-500 text-3xl font-bold mb-4">Checkout</h1>
        <div className="checkout-list max-h-[30vh] overflow-scroll">
          {checkout?.map((item, index) => (
            <div className="flex py-2 items-center ">
              <div className="font-bold w-[60%]">{item.planName}</div>
              <div className="w-[30%] ml-5">
                {item.price !== "Free" ? "$" : ""}
                {item.price}
              </div>
              <button
                onClick={() => {
                  dispatch(removeCheckoutItem(item, index));
                }}
                className="text-red-600 ml-10 hover:shadow hover:shadow-lg hover:shadow-red-500 "
              >
                <FaTrash />
              </button>
            </div>
          ))}
        </div>
        <div className="mt-5 flex flex-col py-1">
          <p> Total amount</p>
          <p className="font-bold py-1">${totalAmount}</p>
        </div>
        <button 
        onClick={() => {dispatch(payNow(checkout))}}
        className="w-full bg-orange-500 rounded-lg p-2 text-white font-bold shadow">
          Pay now
        </button>
      </div>
    )
  );
};
