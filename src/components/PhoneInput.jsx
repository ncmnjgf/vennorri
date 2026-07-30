import React, { useState } from 'react';
import './AuthPhone.css'; 

const PhoneInput = ({ onOtpSent }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);

  const formatPhoneNumber = (number) => {
    if (!number.startsWith('+')) {
      return '+' + number;
    }
    return number;
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
    const formattedNumber = formatPhoneNumber(phoneNumber);
    
    setLoading(true);

    // COMPLETELY Bypassing Firebase for Local Testing
    const mockConfirmationResult = {
      confirm: async () => ({
        user: {
          getIdToken: async () => `mock_phone_${formattedNumber}`
        }
      })
    };
    
    // Simulate slight network delay for realism
    setTimeout(() => {
      onOtpSent(mockConfirmationResult);
      setLoading(false);
    }, 800);
  };

  return (
    <div className="phone-input-container">
      <h2>Provide Phone Number</h2>
      <form onSubmit={handleSendOtp}>
        <div className="input-group">
          <input
            type="tel"
            placeholder="+919876543210"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            pattern="^\+[1-9]\d{1,14}$"
            title="E.164 format required, e.g. +919876543210"
          />
        </div>
        <p className="error-text" style={{color: '#ff3b30', fontSize: '12px'}}></p>
        <div id="recaptcha-container"></div>
        <button type="submit" disabled={loading || !phoneNumber}>
          {loading ? 'Sending...' : 'Send OTP'}
        </button>
      </form>
    </div>
  );
};

export default PhoneInput;
