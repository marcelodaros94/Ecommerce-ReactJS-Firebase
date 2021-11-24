import React from 'react'
import './NavBar.css'
import logo from '../../logo.png'
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
export default function NavBar(){
    return(
        <AppBar position="static">
            <nav>
                <div class="logo">
                    <img src={logo} alt="madrina"></img>
                </div>
                <ul>
                    <li><Button variant="outlined" color="secondary">Inicio</Button></li>
                    <li><Button variant="outlined">Tienda</Button></li>
                </ul>
            </nav>
        </AppBar>
    )
}