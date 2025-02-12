import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

const VerifyOTP = () => {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleVerifyOTP = () => {
    const storedOTP = localStorage.getItem('otp');
    const otpExpiry = localStorage.getItem('otpExpiry');

    if (Date.now() > otpExpiry) {
      alert('OTP expired. Please resend OTP.');
      navigate('/resend-otp');
    } else if (otp === storedOTP) {
      alert('OTP verified successfully!');
      navigate('/dashboard');
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  return (
    <div>
      <h1>Verify OTP</h1>
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button onClick={handleVerifyOTP}>Verify OTP</button>
    </div>
  );
};

export default VerifyOTP;