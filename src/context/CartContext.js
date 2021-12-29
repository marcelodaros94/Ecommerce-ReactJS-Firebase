import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [products, setProducts] = useState([])

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
    }

    const data = {
        products,
        addProducts
    }

    return(
        <CartContext.Provider value={data} >
            {children}
        </CartContext.Provider>
    )
}
export { CartProvider }
export default CartContext 