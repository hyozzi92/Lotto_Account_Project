import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Register from './pages/Register/Register';
import Main from './pages/Main/Main';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
