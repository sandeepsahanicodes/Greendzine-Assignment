import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import CardView from "../components/CardView";
import Footer from "../components/Footer";
import "../styles/CardView.css";
import "../styles/Footer.css"; 
import "../styles/Header.css";
// import { generateOTP } from '../utils/otpUtils';

const Login = () => {
  const [email, setEmail] = useState("");
  //   const navigate = useNavigate();

  //   const handleSendOTP = () => {
  //     const otp = generateOTP(); // Generate a random OTP
  //     alert(`Your OTP is: ${otp}`); // Display OTP as an alert
  //     localStorage.setItem('otp', otp); // Store OTP in local storage
  //     localStorage.setItem('otpExpiry', Date.now() + 30000); // Set OTP expiry (30 seconds)
  //     navigate('/verify-otp'); // Navigate to OTP verification page
  //   };

  return (
    <div className='parent-container-login-page' style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100vh'}}>
      <Header />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CardView heading="Sign In" placeholder="E-mail" btnText="Send Otp" />
      </div>
      <Footer />
    </div>
  );
};

export default Login;
