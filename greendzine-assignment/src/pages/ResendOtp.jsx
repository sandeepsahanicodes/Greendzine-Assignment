import React from 'react';
import { useNavigate } from 'react-router-dom'
import generateOTP from '../utilities/otpGenerator';
import Header from '../components/Header';
import CardView from '../components/CardView';
import Footer from '../components/Footer';


const ResendOtp = () => {
    const navigate = useNavigate()

    const handleResendOTP = () => {
        const otp = generateOTP();
        alert(`Your new OTP is: ${otp}`);
        localStorage.setItem('otp', otp);
        localStorage.setItem('otpExpiry', Date.now() + 30000);
        navigate('/verify-otp');
      };

    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100vh"}}>
        <Header />
        <div style={{ display: "flex", justifyContent: "center" }}>
            <CardView heading="Enter Otp sent to Email" placeholder="OTP" btnText="Validate" isResentOtpContainerHidden={false} onButtonTap={handleResendOTP} />
        </div>
        <Footer />
        </div>
    );
};

export default ResendOtp;

