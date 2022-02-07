import { useContexto } from "../../context/CartProvider"

const CartButton = ({product, quantity, totalPrice}) => {

    const { removeProduct, productsToCart } = useContexto()
    
    return (
        <div key={product.id} className="selectedProduct">
            <img src={product.imagen} alt="Imagen productos" className="itemImagecart" />
            <div className="itemSelected">
                <h3 className="cardNombre">{product.nombre}</h3>
                <h3>Cantidad: {quantity}</h3>
                <h3 className="cardPrecio">${totalPrice}</h3>
            </div>
            {productsToCart.length >= 1 && (<button className="contadorAgregar" onClick={() => removeProduct(product.id)}>Eliminar producto</button>)}
                        
        </div>
    )
}

export default CartButton
