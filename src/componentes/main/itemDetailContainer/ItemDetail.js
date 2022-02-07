import ItemCount from "./ItemCount"
import "../styleMain.css"
import { useState } from "react"
import { useContexto } from "../../../context/CartProvider"


const ItemDetail = ({item}) => {

    const [mostrar, setMostrar] = useState(true)
    const {addToCart} = useContexto()
    
    const onAdd = (contador, setContador) => {
        if (contador !== 0) {
        setContador (1)
        }
    }
    const removeCounter = () =>{
        setMostrar (!mostrar)
    }
    
    return (
        <>
            {!(item) ? (
                <h2 className="itemDTittle">Cargando...</h2>
            ) : (
                <>
                    <h2 className="itemDTittle">Producto seleccionado:</h2>
                    <div key={item.id} className="selectedProduct">
                        <img src={item.imagen} alt="Yerbera de lata" className="itemImage" />
                        <div className="itemSelected">
                            <h3>{item.nombre}</h3>
                            <p>{item.descripción}</p>
                            <h4>${item.precio}</h4>
                            <ItemCount item={item} addToCart={addToCart} onAdd={onAdd} removeCounter={removeCounter} mostrar={mostrar}/>
                        </div>
                    </div>
                </>
                )}
        </>        
    )
}


export default ItemDetail
