import React, { useState, useEffect } from 'react';
import '../styles/CardView.css';
import validateEmail from '../utilities/validateEmail';
import generateOTP from '../utilities/otpGenerator';
import { Navigate, useNavigate } from 'react-router-dom';

const CardView = ({ heading, placeholder, btnText, isResentOtpContainerHidden, onButtonTap}) => {
  const [inputFieldValue, setInputFieldValue] = useState("");
  const [timeLeft, setTimeLeft] = useState(30); // Timer starts at 30 seconds
  const [isTimerRunning, setIsTimerRunning] = useState(true); // Control timer state
  const navigate = useNavigate();
  
  // Start the timer as soon the page loads
  useEffect(() => {
    let interval;
    if (isTimerRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsTimerRunning(false); // Stop the timer when it reaches 0
    }

    // Cleanup the interval on unmount
    return () => clearInterval(interval);
  }, [isTimerRunning, timeLeft]);

  // Format the timer display in "0:30"
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const handleResendOtp = () => {
    setIsTimerRunning(true);
    setTimeLeft(30);
    const otp = generateOTP(); // Generate OTP
    alert(`Your OTP is: ${otp}`); // Display OTP
    localStorage.setItem("otp", otp); // Store OTP in local storage
    localStorage.setItem("otpExpiry", Date.now() + 30000); // Set OTP expiry (30 seconds)
    navigate("/verify-otp"); // Navigate to OTP verification page
  };

  return (
    <div className="parent-container">
      <div className="first-container">
        <h1>{heading}</h1>
        <div className="input-container">
          <input
            type="text"
            className="input"
            placeholder={placeholder}
            value={inputFieldValue}
            onChange={(e) => setInputFieldValue(e.target.value)}
            name=""
            id=""
          />
          <div className={`resend-otp-and-timer-container ${isResentOtpContainerHidden ? 'hidden' : ''}`}>
            <button className={`${isTimerRunning ? 'resend-otp-btn-disabled' : 'resend-otp-btn-enabled'}`} onClick={handleResendOtp} disabled={isTimerRunning}>resend otp</button>
            <span className={`${isTimerRunning ? 'timer-span-enabled' : 'timer-span-disabled'}`}>{formatTime(timeLeft)} sec</span>
          </div>
        </div>
        <button className="button" onClick={() => onButtonTap(inputFieldValue)}>{btnText}</button>
      </div>
      <div className="second-container">
        <p>Web Application with Analytics Dashboard</p>
      </div>
    </div>
  );
};

export default CardView;
