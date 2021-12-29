import React, {useState, useEffect, useContext} from 'react';
import Icon from '@mdi/react'
import { mdiCart } from '@mdi/js';
import './CartWidget.css';
import CartContext from '../../context/CartContext';
export default function CartWidget(){
    const [showCart, setShowCart ] = useState(false)
    useEffect(() => {
        console.log("products cartWidget" , products)
    })
    const {products} = useContext(CartContext)

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
            <div className={`box-cart ${showCart && 'active'}`}>
                {products.map((product) => {
                    return(
                        <div className='item-cart-list' key={product.id}>
                            <p>{product.name}</p>
                            <p>S/ {product.price} c/u</p>
                            <span>Cant: {product.quantity}</span>
                        </div>
                    )
                })}

            </div>
        </div>        
    )
}