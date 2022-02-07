import "../styleMain.css"
import { Link } from "react-router-dom"

const Item = (props) => {
        
    return(
        <div key={props.producto.id} className="card">
            <div className="cardProductos">
                <img src={props.producto.imagen} alt="Imagen productos" className="cardImage" />
                <h3 className="cardNombre">{props.producto.nombre}</h3>
                <h4 className="cardPrecio">${props.producto.precio}</h4>
            </div>
            <Link to={`/productos/${props.producto.id}`}><button className="contadorAgregar">Ver detalle</button></Link>
        </div>
    )
}

export default Item