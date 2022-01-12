import { createContext, useContext, useState } from "react"

const contexto = createContext()

export const { Provider } = contexto

export const useContexto = () => {
    return useContext(contexto)
}

const CartProvider = ({children}) => {

    const [productsQuantity, setProductsQuantity] = useState(0)
    const [productsToCart, setProductsToCart] = useState([])
    
    const addToCart = (id, product, quantity) => {
        if (isInCart(id)) {
            const addProduct = productsToCart.find( (p) => p.id === product.id)
            addProduct.quantity += quantity
            const productInCart= productsToCart.filter( (p) => p.id !== product.id)
            setProductsToCart([...productInCart, addProduct])
            setProductsQuantity(productsQuantity + quantity)
        } else {
            setProductsToCart([...productsToCart, {id, product, quantity}])
            setProductsQuantity(productsQuantity + quantity)
        }
    }

    const isInCart = (id) => {
        return productsToCart.find( (p) => p.id === id )
    }

    const removeProduct = (id) => {
        const search = productsToCart.filter( (product) => product.id !== id)
        const searchQuantity = productsToCart.find( (product) => product.id === id)
        setProductsQuantity(productsQuantity - searchQuantity.quantity)
        setProductsToCart(search)
    }

    const clear = () => {
        setProductsToCart([])
        setProductsQuantity(0)
    }

    const contextValue = {
        productsQuantity,
        productsToCart,
        addToCart,
        removeProduct,
        clear
    }

    return (
        <Provider value={contextValue}>
            {children}
        </Provider>
    )
}

export default CartProvider
