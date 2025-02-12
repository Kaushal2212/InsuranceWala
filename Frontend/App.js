import React from 'react';
import {  Route, Routes, BrowserRouter } from 'react-router-dom';
import InsuranceSignIn from './User/UserSignIn'; // Import the updated InsuranceSignIn component
import './App.css'; // Include your CSS
import InsuranceRegister from './User/UserRegister';
import NavMain from './NavMain';
import AboutMain from './AboutMain';
import InsuranceCards from './Cards';
import Claim from './Claim';
import ContactMain from './ContactMain';
import Home from './Home';
import Cart from './Cart';
import PolicyDetails from './PolicyDetails';
import Payment from './ConfirmBuyCard';

const App = () => {
  return (
      <BrowserRouter>
      <NavMain/>
      <Routes>
        <Route path="/dashboard" element={<NavMain />} />
        <Route path="/register" element={<InsuranceRegister />} />
        <Route path="/" element={<InsuranceSignIn/>} />
        <Route path='/about' element={<AboutMain/>}></Route>
        <Route path='/insurance' element={<InsuranceCards/>}></Route>
        <Route path='/claim' element={<Claim/>}></Route>
        <Route path='/contact' element={<ContactMain/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/policy-details' element={<PolicyDetails/>}></Route>
        <Route path='/payment' element={<Payment/>}></Route>
      </Routes>
      </BrowserRouter>
    




  );
};

export default App;
