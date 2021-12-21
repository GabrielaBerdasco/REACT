import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../styleMain.css"


const ItemCount = ({stock, inicial, onAdd}) => {
    const [contador, setContador] = useState (inicial);


    const sumar = () => {
        if (contador < stock) {
        setContador (contador + 1)
        }
    }

    const restar = () => {
        if (contador > 0) {
        setContador (contador - 1)
        }
    }

    const notify = () =>{
        if(contador > 0) {
        toast("Agregaste " + contador + " productos al carrito");
        } else {
            toast.error("Por favor, selecciona cantidad de unidades")
        }
    }

    return (
        <div className="contadorContainer">
            <div>   
            <button onClick={sumar} className="contadorSuma">+</button>
            <label className="contadorEtiqueta">{contador}</label>
            <button onClick={restar} className="contadorResta">-</button>  
            </div>
            <button onClick={() => {onAdd(contador, setContador); notify()}} className="contadorAgregar">Agregar al carrito</button>
            <ToastContainer />
        </div>

    );
}





export default ItemCount;