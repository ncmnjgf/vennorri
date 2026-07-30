import React, { useState, useEffect } from 'react';
import { loginWithFirebaseToken } from '../services/authService';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const OTPInput = ({ onBack, confirmationResult }) => {
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [timer, setTimer] = useState(30);

  const { loginAuth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    let interval = null;
    if (timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Focus next input
    if (element.value && element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    const otpValue = otp.join('');
    if (otpValue.length !== 6) {
      setError('Please enter a 6-digit OTP.');
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const result = await confirmationResult.confirm(otpValue);
      const user = result.user;
      const idToken = await user.getIdToken();
      
      // Backend login
      const backendResponse = await loginWithFirebaseToken(idToken);
      if (backendResponse && backendResponse.success) {
        const backendData = backendResponse.data;
        loginAuth(backendData.accessToken, backendData.user);
        navigate('/'); // Redirect to dashboard
      } else {
        throw new Error('Backend authentication failed.');
      }
    } catch (err) {
      console.error(err);
      setError(err.message || 'Invalid OTP or Authentication failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="otp-input-container">
      <h2>Enter OTP</h2>
      <form onSubmit={handleVerify}>
        <div className="otp-boxes">
          {otp.map((data, index) => (
            <input
              key={index}
              type="text"
              name="otp"
              maxLength="1"
              value={data}
              onChange={(e) => handleChange(e.target, index)}
              onFocus={(e) => e.target.select()}
            />
          ))}
        </div>
        {error && <p className="error-text">{error}</p>}
        <div className="actions">
          <button type="button" onClick={onBack} disabled={loading} className="back-btn">
            Back
          </button>
          <button type="submit" disabled={loading || otp.join('').length < 6}>
            {loading ? 'Verifying...' : 'Verify'}
          </button>
        </div>
        <div className="resend-timer">
          {timer > 0 ? (
            <p>Resend OTP in {timer}s</p>
          ) : (
            <button type="button" onClick={onBack} className="resend-link">
              Resend OTP
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default OTPInput;
