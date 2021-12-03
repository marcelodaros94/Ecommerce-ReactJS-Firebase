import React, { useState, useEffect } from 'react'
import './ItemList.css'
import Item from '../Item/Item'
import CircularProgress from '@mui/material/CircularProgress';
export default function ItemList(){  
    const [loader, setLoader] = useState(true)
    const [products, setProducts] = useState([])
    const dataProducts=[
        {
            name: 'Caja de Alfajores',
            price: 10,
            stock: 5
        },
        {
            name: 'Caja de cupcakes',
            price: 9,
            stock: 3
        }
    ]  
    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataProducts)
        }, 2000)
    })
    useEffect(() => {
        getProducts.then((data) => {
            console.log("respuesta de promesa:", data)
            setProducts(data)
            //Ocultar loader
            setLoader(false)
        })
    }, [])

    return(
        <>
            <h2>Productos Destacados</h2>
            <div className="product-container">
                {
                    loader
                        ?
                        <CircularProgress />
                        :
                        <div>
                            {products.map(product => {
                                return (
                                    <div key={product.id}>
                                        <Item data={product} />
                                    </div>
                                )
                            })}
                        </div>
                }
            </div>
        </>
    )
}