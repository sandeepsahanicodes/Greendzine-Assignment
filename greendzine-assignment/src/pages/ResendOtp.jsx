import React from 'react';
import Header from '../components/Header';
import CardView from '../components/CardView';
import Footer from '../components/Footer';

const ResendOtp = () => {
    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100vh"}}>
        <Header />
        <div style={{ display: "flex", justifyContent: "center" }}>
            {/* Here not sending the otp generation function as it is availabe on the CardView itself */}
            <CardView heading="Enter Otp sent to Email" placeholder="OTP" btnText="Validate" isResentOtpContainerHidden={false} />
        </div>
        <Footer />
        </div>
    );
};

export default ResendOtp;

