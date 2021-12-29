import React, {useState, useEffect, useContext} from 'react';
import Icon from '@mdi/react'
import { mdiCart } from '@mdi/js';
import './CartWidget.css';
import CartContext from '../../context/CartContext';
import ModalCart from '../ModalCart/ModalCart';
export default function CartWidget(){
    const [showCart, setShowCart ] = useState(false)
    useEffect(() => {
        console.log("products cartWidget" , products)
    })
    const {products, totalPrice} = useContext(CartContext)

    const openCart = () => {
        setShowCart(!showCart)
    }

    console.log("productos desde agregados al carrito: ", products)

    return(
        <div class="cart" onClick={openCart}>
            <Icon path={mdiCart}
            title="User Profile"
            size={1}
            horizontal
            vertical
            rotate={90}
            color="brown"
            spin/>
            {showCart &&
            <ModalCart products={products} total={totalPrice}/>}
        </div>        
    )
}