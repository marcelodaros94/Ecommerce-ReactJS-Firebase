import React, { useState, useEffect } from 'react'
import './ItemCount.css'
export default function ItemCount(){
    
    const [count, setCount] = useState(0)

    const updateItem = () => {        
        setCount(count+1)
    }
    const removeItem = () => {
        count>=1 && setCount(count-1)
    }
    
    return(
    <div>
    <h1>{count}</h1>
    <button onClick={updateItem}>+</button>
    <button onClick={removeItem}>-</button>
    <button>Agregar al carrito</button>
    </div>
    )
}