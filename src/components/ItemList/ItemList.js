import React, { useState, useEffect } from 'react'
import './ItemList.css'
import Item from '../Item/Item'
import { useParams } from 'react-router-dom'
//material ui
import CircularProgress from '@mui/material/CircularProgress';
//firebase
import db from '../../firebase'
import { collection, getDocs } from 'firebase/firestore'

export default function ItemList(){  
    const [loader, setLoader] = useState(true)
    const [products, setProducts] = useState([])
    const { cat }=useParams()
/*
    const dataProducts=[
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
    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataProducts)
        }, 2000)
    })*/

    async function getProducts(db){        
        const productosCol = collection(db, 'productos');
        const productoSnapshot = await getDocs(productosCol);
        const productoList = productoSnapshot.docs.map(doc => {
           let producto=doc.data();
           producto.id=doc.id;
           return producto;
        });
        console.log(productoList)
        return productoList;
    }

    useEffect(() => { /*
        getProducts.then((data) => {
            console.log("respuesta de promesa:", data)
            setProducts(data)
            //Ocultar loader
            setLoader(false)
        })*/
        const tmpProd = []
        getProducts(db).then(prod => {
            prod.filter(resultProd=>{
                console.log(resultProd)
                if(resultProd.category==parseInt(cat) || cat==null){
                    tmpProd.push(resultProd)
                }
            })
            console.log(tmpProd)
            setProducts(tmpProd)
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