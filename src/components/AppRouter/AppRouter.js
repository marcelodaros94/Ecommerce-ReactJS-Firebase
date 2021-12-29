import logo from '../../logo.svg';
import React from 'react';
import NavBar from '../NavBar/NavBar'
import Home from '../../pages/Home/Home'
import Detail from '../../pages/Detail/Detail'
import Category from '../../pages/Category/Category'
import NotFound from '../../pages/NotFound/NotFound'
import Cart from '../../pages/Cart/Cart'
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "../../context/ThemeContext";

export default function AppRouter(){
    return (
    <BrowserRouter>
      <ThemeProvider>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/detail/:id" element={<Detail/>} />
          <Route path="/category/:cat" element={<Category/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}