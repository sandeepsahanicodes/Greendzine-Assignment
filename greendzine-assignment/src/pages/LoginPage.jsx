import React, { useState } from "react";
import Header from "../components/Header";
import CardView from "../components/CardView";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import generateOTP from "../utilities/otpGenerator";
import validateEmail from "../utilities/validateEmail";

const Login = () => {
  const navigate = useNavigate();

  // Create otp and navigate to verify otp screen.
  const createOtp = () => {
    const otp = generateOTP(); // Generate OTP
    alert(`Your OTP is: ${otp}`); // Display OTP
    localStorage.setItem("otp", otp); // Store OTP in local storage
    localStorage.setItem("otpExpiry", Date.now() + 30000); // Set OTP expiry (30 seconds)
    navigate("/verify-otp"); // Navigate to OTP verification page
  };

  const handleEmailValidationAndOtpGeneration = (email) => {
    if (validateEmail(email)) {
      createOtp();
    } else {
      alert("Please a valid email.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
      }}
    >
      <Header />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CardView
          heading="Sign In"
          placeholder="E-mail"
          btnText="Send Otp"
          isResentOtpContainerHidden={true}
          onButtonTap={handleEmailValidationAndOtpGeneration}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Login;
