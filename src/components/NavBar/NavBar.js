import React from 'react'
import './NavBar.css'
import {Link} from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import logo from '../../logo.png'
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
export default function NavBar(){
    return(
        <AppBar position="static">
            <nav>
                <div class="logo">
                    <Link to={`/`}>
                        <img src={logo} alt="madrina"></img>
                    </Link>
                </div>
                <ul>
                    <li><Link to={`/`}>Inicio</Link></li>
                    <li><Link to={`/category/1`}>Boxes</Link></li>
                </ul>
                <CartWidget/>
            </nav>
        </AppBar>
    )
}