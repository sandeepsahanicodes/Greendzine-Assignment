import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardView from "../components/CardView";
import { useNavigate } from "react-router-dom";

const VerifyOtp = () => {
  const navigate = useNavigate();

  const handleVerifyOTP = (otp) => {
    const storedOTP = localStorage.getItem("otp");
    const otpExpiry = localStorage.getItem("otpExpiry");
   
    if (Date.now() > parseInt(otpExpiry)) {
      alert("OTP expired. Please resend OTP.");
      navigate("/resend-otp");
    } else if (otp === storedOTP) {
      navigate("/dashboard");
    } else {
      alert("Invalid OTP. Please try again.");
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
          heading="Enter Otp sent to email address"
          placeholder="OTP"
          btnText="Validate"
          isResentOtpContainerHidden={false}
          onButtonTap={handleVerifyOTP}
        />
      </div>
      <Footer />
    </div>
  );
};

export default VerifyOtp;
