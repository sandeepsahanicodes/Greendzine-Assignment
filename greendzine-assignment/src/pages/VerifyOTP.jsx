import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CardView from '../components/CardView';

const VerifyOtp = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100vh'}}>
      <Header />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CardView heading="Enter Otp sent to email" placeholder="OTP" btnText="Validate" isResentOtpContainerHidden={true}/>
      </div>
      <Footer />
    </div>
  );
};

export default VerifyOtp;