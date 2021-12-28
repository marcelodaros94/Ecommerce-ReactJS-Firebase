import React, { useEffect, useState, useContext } from 'react'
import './NavBar.css'
import {Link} from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import logo from '../../logo.png'
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import ThemeContext from '../../context/ThemeContext';
import SwitchTheme from '../SwitchTheme/SwitchTheme';

export default function NavBar(){
    
    const { theme, changeTheme }=useContext(ThemeContext)

    return(
        <AppBar position="static" className={theme ? 'theme-dark' : 'theme-light'}>
            <nav>
                <div class="logo" attrinvented={theme ? 'theme-dark' : 'theme-light'}>
                    <Link to={`/`}>
                        <img src={logo} alt="madrina"></img>
                    </Link>
                </div>
                <ul>
                    <li><Link to={`/`}>Inicio</Link></li>
                    <li><Link to={`/category/1`}>Boxes</Link></li>
                </ul>
                <SwitchTheme changeTheme={changeTheme}/>
                <CartWidget/>
            </nav>
        </AppBar>
    )
}