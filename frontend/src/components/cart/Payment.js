import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../config/config";
import { hideSpinner, showSpinner } from "../../redux/actions/spinnerActions";
import { useDispatch } from "react-redux";
const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const sessionId = query.get("session_id");

    if (sessionId) {
        dispatch(showSpinner('Verifying Payment Details'))
      axios.post(API_URL+"/api/payment/verify", { sessionId })
        .then(response => {
            dispatch(hideSpinner())
          if (response.data.success) {
            navigate("/order-history");
          } else {
            console.error("Payment verification failed");
          }
        })
        .catch(error => {
          console.error("Error verifying payment", error);
        });
    }
  }, [location, navigate]);

  return (
    <div>
      <h1>Verifying your payment...</h1>
    </div>
  );
};

export default Payment;
