import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/LoginPage";
import VerifyOtp from "./pages/VerifyOtp";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/verify-otp" element={<VerifyOtp />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
