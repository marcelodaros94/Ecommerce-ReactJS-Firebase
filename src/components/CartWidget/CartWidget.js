import React from 'react'
import Icon from '@mdi/react'
import { mdiCart } from '@mdi/js';
import './CartWidget.css'
export default function CartWidget(){
    return(
        <div class="cart">
            <Icon path={mdiCart}
            title="User Profile"
            size={1}
            horizontal
            vertical
            rotate={90}
            color="brown"
            spin/>
        </div>        
    )
}