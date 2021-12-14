import React from 'react'
export default function ItemDetail({data}){
    console.log("data: !!");
    console.log(data)
    return(
        <>
            <div>
                <h3>Detalle de producto</h3>
                <p>Nombre: {data.name}</p>
                <p>Precio: {data.price}</p>
                <p>Stock: {data.stock}</p>
            </div>
        </>
    )
}