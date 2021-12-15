import React, { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

export default function ItemDetailContainer(){
    const [product, setProduct] = useState([])
    const { id }=useParams()

    const dataProduct=[
        {
            id: 1,
            name: 'Caja de Alfajores',
            price: 10,
            stock: 5,
            category: 1
        },
        {
            id: 2,
            name: 'Caja de cupcakes',
            price: 9,
            stock: 3,
            category: 1
        }
    ]

    const getProduct = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataProduct)
        }, 2000)
    })
    useEffect(() => {
        getProduct.then(prod => {
            prod.filter(resultProd=>{
                if(resultProd.id==parseInt(id))
                    setProduct(resultProd)
            })
        })
    }, [])

    return(
        <div>ItemDetailContainer
        <ItemDetail data={product}/>
        </div>
    )
}