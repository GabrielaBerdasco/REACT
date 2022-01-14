import { createContext, useContext, useState } from "react"

const contexto = createContext()

export const { Provider } = contexto

export const useContexto = () => {
    return useContext(contexto)
}

const CartProvider = ({children}) => {

    const [productsQuantity, setProductsQuantity] = useState(0)
    const [productsToCart, setProductsToCart] = useState([])
    const [totalAmount, setTotalAmount] = useState(0)
    
    const addToCart = (id, product, quantity) => {
        if (isInCart(id)) {
            const addProduct = productsToCart.find( (p) => p.id === product.id)
            let newCost = quantity*product.precio
            addProduct.totalPrice += (newCost)
            addProduct.quantity += quantity
            const productInCart= productsToCart.filter( (p) => p.id !== product.id)
            setProductsToCart([...productInCart, addProduct])
            setProductsQuantity(productsQuantity + quantity)
            setTotalAmount(totalAmount + newCost)
        } else {
            const totalPrice = product.precio * quantity
            setProductsToCart([...productsToCart, {id, product, quantity, totalPrice}])
            setProductsQuantity(productsQuantity + quantity)
            setTotalAmount(totalAmount + totalPrice)
        }
    }

    const isInCart = (id) => {
        return productsToCart.find( (p) => p.id === id )
    }

    const removeProduct = (id) => {
        const search = productsToCart.filter( (product) => product.id !== id)
        const searchQuantity = productsToCart.find( (product) => product.id === id)
        setProductsQuantity(productsQuantity - searchQuantity.quantity)
        setTotalAmount(totalAmount - searchQuantity.totalPrice)
        setProductsToCart(search)
    }

    const clear = () => {
        setProductsToCart([])
        setProductsQuantity(0)
        setTotalAmount(0)
    }

    const contextValue = {
        productsQuantity,
        productsToCart,
        totalAmount,
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
