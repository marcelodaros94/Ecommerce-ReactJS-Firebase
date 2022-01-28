import React, { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
//firebase
import db from '../../firebase'
import { collection, getDocs } from 'firebase/firestore'


export default function ItemDetailContainer(){
    const [product, setProduct] = useState([])
    const { id }=useParams()
/*
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


    useEffect(() => {
        getProducts(db).then(prod => {
            prod.filter(resultProd=>{
                if(resultProd.id==id)
                    setProduct(resultProd)
            })
        })
    }, [])

    return(
        <div>
        <ItemDetail data={product}/>
        </div>
    )
}