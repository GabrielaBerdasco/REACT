import { useContexto } from "../../context/CartProvider"

const CartButton = (key, product, quantity) => {

    const { removeProduct, clear } = useContexto()

    return (
        <div key={key}>
            <div className="cardProductos">
                <img src={product.imagen} alt="Imagen productos" className="cardImage" />
                <h3 className="cardNombre">{product.nombre}</h3>
                <h4 className="cardPrecio">${product.precio}</h4>
            </div>
            <h3>{quantity}</h3>
            <button className="" onClick={removeProduct(product.id)}>Eliminar producto</button>
            <button onClick={clear()}>Eliminar productos</button>            
        </div>
    )
}

export default CartButton
