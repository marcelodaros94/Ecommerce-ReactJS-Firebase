import React, { useState, useEffect, useContext } from 'react'
import CartContext from '../../context/CartContext';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount'

export default function Item({ data }){
/*
    const [itemCount, setItemCout] = useState(0)

    const updateItem = () => {
        itemCount < data.stock && setItemCout(itemCount + 1)
    }

    const removeItem = () => {
        itemCount > 0 && setItemCout(itemCount - 1)
    }
*/
    const { addProducts , products} = useContext(CartContext)
    const [itemCart, setItemCart] = useState(
        {
            id: data.id,
            name: data.name,
            price: data.price,
            quantity:0
        }
    )
    const sendItem=()=>{
        console.log("itemCart: ",itemCart)
        addProducts(itemCart)
        console.log("Productos agregados: ", products)
    }
    const onAdd = (value) => {
        console.log("items agregados: ", value)
        itemCart.id=data.id
        itemCart.name=data.name
        itemCart.price=data.price
        itemCart.quantity=value
    }
    return (
        <div className="card-item-product">
                <span className="stock-text">Stock : {data.stock}</span>
                <div className="item-info">
                    <h2>{data.name}</h2>
                    <div className="item-image">
                        <img src={`/assets/${data.img}`} alt="product image" />
                    </div>
                    <div className="item-count">
                        <div className="item-count__info">
                            <span>Cantidad: </span>                
                            
                        </div>
                        <ItemCount stock={data.stock} onAdd={onAdd}/>
                    </div>
                    <Button onClick={sendItem}>Agregar al carrito</Button>                    
                    <Button component={Link} to={`/detail/${data.id}`}>Detalle</Button>

                </div>
        </div>

    )/*
    return (
        <div className="card-item-product">
                <span className="stock-text">Stock : {data.stock}</span>
                <div className="item-info">
                    <h2>{data.name}</h2>
                    <div className="item-count">
                        <div className="item-count__info">
                            <span>Cantidad: </span>                
                            
                        </div>                     
                        <div className="item-count__buttons">
                            <Button onClick={removeItem}>-</Button>
                            <p>{itemCount}</p>
                            <Button onClick={updateItem} >+</Button>
                        </div>
                    </div>
                    <Button>Agregar al carrito</Button>                    
                    <Button component={Link} to={`/detail/${data.id}`}>Detalle</Button>

                </div>
        </div>

    )*/
}