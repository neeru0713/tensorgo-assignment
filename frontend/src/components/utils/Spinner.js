import React from "react";
import "./Spinner.css"
import { useSelector } from "react-redux";
export const Spinner = () => {
    const spinner = useSelector((state) => state.spinner);
  return (
    spinner.show &&
    <div className="overlay fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50">
      <div className="spinner"></div>
    </div>
  );
};
