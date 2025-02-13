import React, { useState } from 'react';
import Header from '../components/Header';
import CardView from '../components/CardView';
import Footer from '../components/Footer';

const Login = () => {
  return (
    <div style={{display: "flex", flexDirection: 'column', justifyContent: 'space-between', height: '100vh'}}>
      <Header />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CardView heading="Sign In" placeholder="E-mail" btnText="Send Otp" isResentOtpContainerHidden={true}/>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
