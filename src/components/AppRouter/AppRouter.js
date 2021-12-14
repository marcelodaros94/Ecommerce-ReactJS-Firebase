import logo from '../../logo.svg';
import React from 'react';
import NavBar from '../NavBar/NavBar'
import Home from '../../pages/Home/home'
import Detail from '../../pages/Detail/detail'
import {BrowserRouter, Routes, Route } from 'react-router-dom';

export default function AppRouter(){
    return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/detail" element={<Detail/>} />
    </Routes>
  </BrowserRouter>
  )
}