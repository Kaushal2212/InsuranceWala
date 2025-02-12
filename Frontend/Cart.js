import React, { useState, useEffect } from 'react';
import {useNavigate, useLocation } from 'react-router-dom';
import './Cart.css'; // Importing the CSS file for styling

const Cart = () => {
  const location = useLocation();
  const { state } = location;
  const navigate = useNavigate();
  
  // Check if cart items are stored in localStorage or passed from navigation
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    return state ? [...savedCart, state] : savedCart; // If state exists, add it to the cart
  });

  // Update localStorage whenever the cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.policyPremium, 0);

  const placeorder = async () => {
    const totalAmount = parseFloat(totalPrice) * 100; // Convert to paise
  
    // Ensure Razorpay script is loaded
    if (!window.Razorpay) {
      alert("Razorpay SDK not loaded. Please check your internet connection.");
      return;
    }
  
    const options = {
      key: "rzp_test_t6HpjLCGPzrBb2", // Replace with your Razorpay Key ID
      amount: totalAmount,
      currency: "INR",
      name: "Policy",
      description: "Payment",
      handler: function (response) {
        alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
        console.log(response);
        navigate('/payment', { state: { cartItems, paymentId: response.razorpay_payment_id}});
       
      },
      prefill: {
        name: "",
        email: "",
        contact: "",
      },
      theme: {
        color: "#3399cc",
      }
    };
  
    const razorpayInstance = new window.Razorpay(options);
    razorpayInstance.open();
  };
  

  return (
    <div className="cart-container">
      <h1 >Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="clear-cart-message">Your cart is empty. Please add some policies.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <div className="cart-item-top">
                <img src={item.logo} alt={item.policyName} className="cart-item-logo" />
                <div className="cart-item-details">
                  <h3>{item.policyName}</h3>
                  <p>{item.policyDescription}</p>
                </div>
              </div>
              <div className="cart-item-price">₹{item.policyPremium}</div>
            </div>
          ))}
          <div className="cart-summary">
            <h2>Total Price: ₹{totalPrice}</h2>
            <div className="cart-buttons">
              <button className="checkout-btn" onClick={placeorder}>Proceed to Checkout</button>
              <button className="clear-cart-btn" onClick={() => setCartItems([])}>Clear Cart</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
