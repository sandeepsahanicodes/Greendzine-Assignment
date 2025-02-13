import React from "react";
import "../styles/CardView.css";

const CardView = ({ heading, placeholder, btnText, isResentOtpContainerHidden }) => {
  return (
    <div className="parent-container">
      <div className="first-container">
        <h1>{heading}</h1>
        <div className="input-container">
          <input
            type="email"
            className="input"
            placeholder={placeholder}
            name=""
            id=""
          />
          <div className={`resend-otp-and-timer-container ${isResentOtpContainerHidden ? 'hidden' : ''}`}>
            <button className="resend-otp-btn">resend otp</button>
            <span className="timer-span">0:30 sec</span>
          </div>
        </div>
        <button className="button">{btnText}</button>
      </div>
      <div className="second-container">
        <p>Web Application with Analytics Dashboard</p>
      </div>
    </div>
  );
};

export default CardView;
