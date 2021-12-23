import ItemCount from "./ItemCount"
import "../styleMain.css"

const ItemDetail = ({item}) => {
    
    const onAdd = (contador, setContador) => {
        if (contador !== 0) {
        setContador (1)
        }
    }
    
    if(item === null){
        return (
            <>
            <h2>Cargando...</h2>
            </>
        )
    } else {
    return (
        <>
            <h2>Producto seleccionado:</h2>
            <div key={item.id} className="selectedProduct">
                <img src={item.imagen} alt="Yerbera de lata" className="itemImage" />
                <div className="itemSelected">
                    <h3>{item.nombre}</h3>
                    <p>{item.descripción}</p>
                    <h4>${item.precio}</h4>
                    <ItemCount stock={item.stock} inicial={1} onAdd={onAdd}/>
                </div>
            </div>
        </>
    )
    }
}


export default ItemDetail
