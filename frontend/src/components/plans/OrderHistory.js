import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../config/config";
import { useDispatch, useSelector } from "react-redux";
import { showSpinner, hideSpinner } from "../../redux/actions/spinnerActions";
import { showNotification } from "../../redux/actions/notificationActions";

export const OrderHistory = () => {
  const [orderHistory, setOrdersHistory] = useState([]);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        dispatch(showSpinner('Getting your plans'))
        const response = await axios.get(`${API_URL}/api/plan/order-history`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        dispatch(hideSpinner())
        setOrdersHistory(response.data.plans);
      } catch (err) {
        dispatch(hideSpinner())
        dispatch(showNotification({type: 'error', message: 'An error occured while fetchig your plans', sticky: true}))
      } 
    };
    fetchOrders();
  }, []);

  return (
    <div className="order-history-wrapper">
      <h1 className="text-3xl font-bold text-gray-600 px-10 pt-10">
        Your Orders
      </h1>
      <div className="orders-list px-10 pt-5">
        {orderHistory?.map((plan, index) => (
          <div key={index} className="order-item border-b py-4">
            <h2 className="text-xl font-semibold">{plan.planName}</h2>
            <p className="text-gray-600">${plan.price}</p>
            <p className="text-gray-600">{plan.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
