import "../styleMain.css"
import { Link } from "react-router-dom"
/* import { useContexto } from "../../../context/CartProvider" */
/* import CartButton from "../../cart/CartButton" */

const Item = ({id, imagen, nombre, precio, href}) => {
        
    /* const { removeProduct, clear } = useContexto() */

    return(
        <div key={id} className="card">
            <div className="cardProductos">
                <img src={imagen} alt="Imagen productos" className="cardImage" />
                <h3 className="cardNombre">{nombre}</h3>
                <h4 className="cardPrecio">${precio}</h4>
            </div>
            <button className="contadorAgregar"><Link to={href} >Ver detalle</Link></button>

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