import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';  // Import directly
import SignupPage from './pages/SignupPage';
import "./App.css";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path = "/signin" element={<SignupPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;