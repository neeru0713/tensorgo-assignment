import React from "react";
import { RiFileList3Fill } from "react-icons/ri";

export const PlanCard = ({ plan }) => { 
  return (
    <div className="plan-card-wrapper flex bg-orange-200 rounded-xl shadow shadow-lg">
      <div className="plan-card border rounded-md flex flex-col gap-2 p-5 w-full text-black">
        <div className="font-bold text-3xl flex items-center gap-5">
          <div className="plan-logo h-12 flex items-center">
            <RiFileList3Fill />
          </div>
          <p> {plan.planName}</p>
        </div>
        <hr className="border border-black"></hr>
        <div>{plan.description}</div>
        <div className="text-2xl font-semibold">{plan.price !== 'Free' ? '$' : ''} {plan.price} {plan.price !== 'Free' ? '/ Year' : ''}</div>
        <div className="text-sm">Upto {plan.userLimit} user(s) can use our services from your organizaiton</div>
        <button className="text-white font-semibold p-2 border border-orange-600 bg-orange-600 rounded">Add to Cart</button>
      </div>
    </div>
  );
};
