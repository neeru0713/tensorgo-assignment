import React from "react";
import { Checkout } from "./Checkout";
import { useSelector } from "react-redux";
import { CartItem } from "./CartItem";
import { Link } from "react-router-dom";
export const Cart = () => {
  const cartData = useSelector((state) => state.cart);
  return (
    <div className="cart-wrapper flex h-screen flex-col">
      <h1 className="text-3xl font-bold text-gray-600 px-10 pt-10">
        Your Cart
      </h1>
      {cartData?.cartLength ? (
        <>
          <div className="flex overflow-scroll">
            <div className="cart-section w-[70%] flex flex-col p-10 gap-2">
              {cartData?.cart?.map((item, index) => (
                <CartItem data={item} index={index} />
              ))}
            </div>

            <div className="checkout-section w-[30%]">
              <Checkout />
            </div>
          </div>
        </>
      ) : (
        <h1 className="p-10 text-xl">
            <Link to="/" className="text-blue-500">Browse plans</Link> to add to your cart
        </h1>
      )}
    </div>
  );
};
