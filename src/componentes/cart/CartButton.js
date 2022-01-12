import { useContexto } from "../../context/CartProvider"

const CartButton = ({product, quantity}) => {

    const { removeProduct } = useContexto()
    console.log(product);
    return (
        <div key={product.id} className="selectedProduct">
            <img src={product.imagen} alt="Imagen productos" className="itemImage" />
            <div className="itemSelected">
                <h3 className="cardNombre">{product.nombre}</h3>
                <h3 className="cardPrecio">${product.precio}</h3>
                <h3>Cantidad: {quantity}</h3>
            </div>
            <button className="contadorAgregar" onClick={() => removeProduct(product.id)}>Eliminar producto</button>            
        </div>
    )
}

export default CartButton
