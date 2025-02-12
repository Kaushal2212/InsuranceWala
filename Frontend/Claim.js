import React, { useState,useEffect } from 'react';
import './Claim.css';
import axios from 'axios';

const Claim = () => {
  const [formData, setFormData] = useState({
    claimNumber: '',
    policyNumber: '',
    claimDescription: '',
    claimDate: '',
    claimAmount: '',
    clientId: '', // Added clientId field
  });

  // Fetch client ID from localStorage or API
  useEffect(() => {
    const storedClientId = localStorage.getItem('clientId'); // Assuming client ID is stored here after login
    if (storedClientId) {
      setFormData((prevData) => ({
        ...prevData,
        clientId: storedClientId,
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/claimapi', formData);
      window.alert('Congratulations! Your claim has been submitted successfully.');
      setFormData({
        claimNumber: '',
        policyNumber: '',
        claimDescription: '',
        claimDate: '',
        claimAmount: '',
        clientId: localStorage.getItem('clientId') || '', // Reset but retain clientId
      });
    } catch (error) {
      console.error('Error submitting claim:', error);
      window.alert('An error occurred while submitting your claim. Please try again.');
    }
  };

  return (
    <div className="page-wrapper">
      <div className="box">
        <h1>Submit Your Insurance Claim</h1>
        <p>Please fill out the form below to submit a claim for your insurance policy.</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="claimNumber">Claim Number:</label>
            <input
              type="text"
              id="claimNumber"
              name="claimNumber"
              placeholder="Enter your claim number"
              value={formData.claimNumber}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="policyNumber">Policy Number:</label>
            <input
              type="text"
              id="policyNumber"
              name="policyNumber"
              placeholder="Enter your policy number"
              value={formData.policyNumber}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="claimDate">Claim Date:</label>
            <input
              type="date"
              id="claimDate"
              name="claimDate"
              value={formData.claimDate}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="claimAmount">Claim Amount:</label>
            <input
              type="text"
              id="claimAmount"
              name="claimAmount"
              placeholder="Enter the claim amount"
              value={formData.claimAmount}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="claimDescription">Claim Description:</label>
            <textarea
              id="claimDescription"
              name="claimDescription"
              placeholder="Provide details about the incident and claim."
              value={formData.claimDescription}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit">Submit Claim</button>
        </form>
      </div>
    </div>
  );
};

export default Claim;
