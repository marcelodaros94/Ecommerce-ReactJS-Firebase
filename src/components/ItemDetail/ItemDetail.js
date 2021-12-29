import React, { useState, useEffect, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import CartContext from '../../context/CartContext';
export default function ItemDetail({data}){    
    const [quantityItem, setQuantityItem] = useState(0)
    const { addProducts , products} = useContext(CartContext)
    console.log("data item: ", data)
    const [itemCart, setItemCart] = useState(
        {
            id: data.id,
            name: data.name,
            price: data.price,
            quantity:0
        }
    )
    const onAdd = (value) => {
        console.log("items agregados: ",value)
        itemCart.id=data.id
        itemCart.name=data.name
        itemCart.price=data.price
        itemCart.quantity=value
    }
    const sendItem=()=>{
        console.log("itemCart: ",itemCart)
        addProducts(itemCart)
        console.log("Productos agregados: ", products)
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
                       Comprar
                </Button>
            </div>
        </>
    )
}