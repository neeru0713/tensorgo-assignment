import React from "react";
import { FaTrash } from "react-icons/fa6";
import { addCheckoutItem, removeCartItem } from "../../redux/actions/cartActions";
import { useDispatch } from "react-redux";

export const CartItem = ({ data, index }) => {
    const dispatch = useDispatch();
  return (
    <div className="cart-item flex items-center bg-white gap-10 p-5 rounded-lg shadow shadow-lg min-w-[550px]">
      <div className="font-bold text-xl w-[20%]">{data?.planName} Plan</div>
      <div className="w-[20%]">
        Max <span className="font-bold ">{data?.userLimit}</span> user(s)
        allowed
      </div>
      <div className="w-[20%] text-orange-600 font-semibold text-xl">
        {data.price !== "Free" ? "$" : ""} {data?.price}
      </div>
      <button 
      onClick={() => {dispatch(addCheckoutItem(data))}}
      className="bg-white p-2 text-bold border rounded-lg text-black font-bold hover:bg-orange-600 hover:text-white shadow shadow-lg">
        Buy now
      </button>
      <button
      onClick={() => {dispatch(removeCartItem(data, index))}}
      className="flex items-center text-red-600 gap-2 p-2 border border-red-500 rounded-lg hover:bg-red-50">
        <FaTrash />
       <span>Delete</span>
      </button>
    </div>
  );
};
