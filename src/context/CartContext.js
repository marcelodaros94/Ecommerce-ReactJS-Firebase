import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [products, setProducts] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    const addProducts = (product) => {
        const exists = products.find(item => item.name === product.name)
        if(exists){
            console.log("oye:",{...exists, quantity: exists.quantity + product.quantity })
            setProducts(
                products.map(
                    x => x.name == product.name ? {...exists, quantity: exists.quantity + product.quantity } : x
                )
            )
        }else{
            setProducts([...products, product])
        }
        setTotalPrice(totalPrice + product.price*product.quantity)
        console.log("total:"+(totalPrice + product.price*product.quantity))
    }
    const onRemove = (item) => {
        console.log("cart remove item",item )
        setProducts(products.filter(x => x.name !== item.name)
            )
        setTotalPrice(totalPrice - item.price*item.quantity)
    }

    const data = {
        products,
        addProducts,
        totalPrice,
        onRemove
    }

    return(
        <CartContext.Provider value={data} >
            {children}
        </CartContext.Provider>
    )
}
export { CartProvider }
export default CartContext 