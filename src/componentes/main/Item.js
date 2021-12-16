import ItemCount from "./ItemCount"
import "./styleMain.css"

const Item = ({id, nombre, descripción, precio, stock}) => {

    const onAdd = (contador, setContador) => {
        if (contador !== 0) {
        setContador (1)
        }
    }

    return(
        <div key={id} className="card">
        <div className="cardProductos">
            <h3 className="cardNombre">{nombre}</h3>
            <p className="cardDescripcion">{descripción}</p>
            <h4 className="cardPrecio">${precio}</h4>
        </div>
        <ItemCount stock={stock} inicial={1} onAdd={onAdd}/>
        </div>
    )
}

export default Item