import ItemCount from "./ItemCount"
import "../styleMain.css"
import { useState } from "react/cjs/react.development"

const ItemDetail = ({item}) => {

    const [mostrar, setMostrar] = useState(true)
    
    const onAdd = (contador, setContador) => {
        if (contador !== 0) {
        setContador (1)
        }
    }
    const removeCounter = () =>{
        setMostrar (!mostrar)
    }
    
    if(item === null){
        return (
            <>
            <h2 className="itemDTittle">Cargando...</h2>
            </>
        )
    } else {
    return (
        <>
            <h2 className="itemDTittle">Producto seleccionado:</h2>
            <div key={item.id} className="selectedProduct">
                <img src={item.imagen} alt="Yerbera de lata" className="itemImage" />
                <div className="itemSelected">
                    <h3>{item.nombre}</h3>
                    <p>{item.descripción}</p>
                    <h4>${item.precio}</h4>
                    <ItemCount stock={item.stock} inicial={1} onAdd={onAdd} removeCounter={removeCounter} mostrar={mostrar}/>
                </div>
            </div>
        </>
    )
    }
}


export default ItemDetail
