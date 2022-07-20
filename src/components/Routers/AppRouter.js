import React from "react";
import {Routes, Route} from 'react-router-dom'
import Login from "../Auth/Login";
import Container from "../common/Container"
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import PayFees from "../Student/PayFees";
import Self from "../Student/Self";
import Students from "../Student/Students";

const AppRouter = () => {

  // Home
  // Login
  // Students
  // MyPage

  // optional teacher

  return (
    <Container>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Self />} />
        <Route path="/students" element={<Students />} />
        <Route path="/payfees" element={<PayFees />} />
      </Routes>
    </Container>
  )
}

export default AppRouter;