import React, { useEffect, useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems = [], paymentId = "" } = location.state || {}; 

  const [isPaid, setIsPaid] = useState(false);
  const [error, setError] = useState(null);

  const clientId = localStorage.getItem("clientId");

  const totalPremium = cartItems.reduce((sum, item) => sum + Number(item.policyPremium), 0);

  const generatePolicyNumber = () => Math.floor(1000000000 + Math.random() * 9000000000);

  // ✅ Prevent multiple API calls using useRef
  const hasPosted = useRef(false);

  useEffect(() => {
    const processPayment = async () => {
      if (hasPosted.current) return; // ✅ Prevent second execution
      hasPosted.current = true;

      if (!clientId) {
        setError("Client ID not found. Please log in again.");
        return;
      }

      if (cartItems.length === 0) {
        setError("No policies selected for payment.");
        return;
      }

      try {
        const orders = cartItems.map((item) => ({
          policyNumber: generatePolicyNumber(),
          policyName: item.policyName,
          policyType: item.policyType,
          policyPremium: item.policyPremium.toString(),
          policyDescription: item.policyDescription,
          clientId,
          paymentId,
        }));

        await Promise.all(
          orders.map((order) => axios.post('http://localhost:8080/buy', order))
        );

        setIsPaid(true);
        setError(null);
        alert(`Payment successful! Your policy No: ${generatePolicyNumber()}`);

        setTimeout(() => {
          navigate('/home');
        }, 2000);
      } catch (err) {
        setError(err.response?.data || "An error occurred while processing your order.");
      }
    };

    processPayment();
  }, []); // ✅ Empty array ensures useEffect runs only on mount

  return (
    <div className="payment-bg">
      <h2>Payment</h2>
      {isPaid ? (
        <p>Payment successful! Redirecting to your orders...</p>
      ) : error ? (
        <p style={{ color: "red" }}>Error: {error}</p>
      ) : (
        <p>Processing your payment...</p>
      )}
    </div>
  );
};

export default Payment;
