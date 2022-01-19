import "../styleMain.css"
import { Link } from "react-router-dom"
/* import { useContexto } from "../../../context/CartProvider" */
/* import CartButton from "../../cart/CartButton" */

const Item = (props) => {
        
    /* const { removeProduct, clear } = useContexto() */

    return(
        <div key={props.producto.id} className="card">
            <div className="cardProductos">
                <img src={props.producto.imagen} alt="Imagen productos" className="cardImage" />
                <h3 className="cardNombre">{props.producto.nombre}</h3>
                <h4 className="cardPrecio">${props.producto.precio}</h4>
            </div>
            <Link to={`/productos/${props.producto.id}`}><button className="contadorAgregar">Ver detalle</button></Link>

            {/* {href ? (
                <button className="contadorAgregar"><Link to={href} >Ver detalle</Link></button>
            ) : (
                <div>
                    <CartButton removeProduct={removeProduct} id={id} quantity={quantity} />
                    <button onClick={clear()}>Borrar todo</button>
                </div>
            )} */}
        </div>
    )
}

export default Item