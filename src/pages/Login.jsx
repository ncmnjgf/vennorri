import React, { useState } from 'react';
import PhoneInput from '../components/PhoneInput';
import OTPInput from '../components/OTPInput';

const Login = () => {
  const [confirmationResult, setConfirmationResult] = useState(null);

  const handleOtpSent = (result) => {
    setConfirmationResult(result);
  };

  const handleBackToPhone = () => {
    setConfirmationResult(null);
  };

  return (
    <div className="login-page">
      {!confirmationResult ? (
        <PhoneInput onOtpSent={handleOtpSent} />
      ) : (
        <OTPInput 
          onBack={handleBackToPhone} 
          confirmationResult={confirmationResult} 
        />
      )}
    </div>
  );
};

export default Login;
