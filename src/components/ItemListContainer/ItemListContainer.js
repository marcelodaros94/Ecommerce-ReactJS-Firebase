import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
export default function ItemListContainer(){
    return(
        <div>
            <h1>Bienvenido a Madrina</h1>
            <ItemCount stock={10}/>
        </div>
    )
}