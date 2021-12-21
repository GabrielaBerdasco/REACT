import "../styleMain.css"

const Item = ({id, nombre, precio}) => {

    return(
        <div key={id} className="card">
            <div className="cardProductos">
                <h3 className="cardNombre">{nombre}</h3>
                <h4 className="cardPrecio">${precio}</h4>
            </div>
            <button className="contadorAgregar">Ver detalle</button>
        </div>
    )
}

export default Item