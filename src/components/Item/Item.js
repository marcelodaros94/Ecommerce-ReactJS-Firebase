import React, { useState, useEffect } from 'react'
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
    const onAdd = (value) => {
        console.log("items agregados: ", value)
    }
    return (
        <div className="card-item-product">
                <span className="stock-text">Stock : {data.stock}</span>
                <div className="item-info">
                    <h2>{data.name}</h2>
                    <div className="item-count">
                        <div className="item-count__info">
                            <span>Cantidad: </span>                
                            
                        </div>
                        <ItemCount stock={data.stock} onAdd={onAdd}/>
                    </div>
                    <Button>Agregar al carrito</Button>                    
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