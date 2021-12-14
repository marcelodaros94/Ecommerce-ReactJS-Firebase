import React, { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
export default function ItemDetailContainer(){
    const [product, setProduct] = useState([])
    const dataProduct=
        {
            name: 'Caja de Alfajores',
            price: 10,
            stock: 5
        }
    
    const getProduct = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataProduct)
        }, 2000)
    })
    useEffect(() => {
        getProduct.then((data) => {
            console.log("respuesta de promesa:", data)
            setProduct(data)
        })
    }, [])

    return(
        <div>ItemDetailContainer
        <ItemDetail data={product}/>
        </div>
    )
}