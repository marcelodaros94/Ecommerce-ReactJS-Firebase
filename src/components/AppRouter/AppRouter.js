import logo from '../../logo.svg';
import React from 'react';
import NavBar from '../NavBar/NavBar'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Routes, Route } from 'react-router-dom';

export default function AppRouter(){
    return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route exact path="/" element={<ItemListContainer/>} />
      <Route path="/detail" element={<ItemDetailContainer/>} />
    </Routes>
  </BrowserRouter>
  )
}