import React, { useState, useEffect } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
export default function ItemDetail({data}){
    
    const [quantityItem, setQuantityItem] = useState(0)
    const [itemCart, setItemCart] = useState(
        {
            id: data.id,
            name: data.name,
            quantity:0
        }
    )
    const onAdd = (value) => {
        console.log("items agregados: ",value)
        itemCart.id=data.id
        itemCart.name=data.name
        itemCart.quantity=value
    }
    const sendItem=()=>{
        console.log("itemCart: ",itemCart)
    }
    console.log("data: !!");
    console.log(data)
    return(
        <>
            <div>
                <h3>Detalle de producto</h3>
                <p>Nombre: {data.name}</p>
                <p>Precio: {data.price}</p>
                <p>Stock: {data.stock}</p>
                <ItemCount stock={data.stock} onAdd={onAdd}/>
                <Button variante="contained" onClick={sendItem}>
                   <Link to="/cart">Comprar</Link>
                </Button>
            </div>
        </>
    )
}