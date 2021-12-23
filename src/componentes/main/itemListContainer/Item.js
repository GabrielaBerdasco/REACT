import "../styleMain.css"
import { Link } from "react-router-dom"

const Item = ({id, imagen, nombre, precio, href}) => {
    
    /* const { postId } = useParams()
    
    console.log(postId); */
    
    return(
        <div key={id} className="card">
            <div className="cardProductos">
                <img src={imagen} alt="Imagen productos" className="cardImage" />
                <h3 className="cardNombre">{nombre}</h3>
                <h4 className="cardPrecio">${precio}</h4>
            </div>
            <button className="contadorAgregar"><Link to={href} >Ver detalle</Link></button>
        </div>
    )
}

export default Item