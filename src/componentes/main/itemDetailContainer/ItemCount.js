import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../styleMain.css"


const ItemCount = ({stock, inicial, onAdd, removeCounter, mostrar}) => {
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

    if (mostrar) {
        return (
            <>
                <ToastContainer />
                <div className="contadorContainer">
                    <div>   
                        <button onClick={sumar} className="contadorSuma">+</button>
                        <label className="contadorEtiqueta">{contador}</label>
                        <button onClick={restar} className="contadorResta">-</button>  
                    </div>
                    <button onClick={() => {onAdd(contador, setContador); notify(); removeCounter()}} className="contadorAgregar">Agregar al carrito</button>
                    <button className="contadorAgregar"><Link to="/carrito">Finalizar compra</Link></button>
                </div>
            </>
            
        )
        
    } else {
        return (
            <>
                <ToastContainer />
                <div className="contadorContainer">
                    <h3>Productos en carrito</h3>
                    <h6>Por favor, finalice su compra</h6>
                    <button className="contadorAgregar"><Link to="/carrito">Finalizar compra</Link></button>
                </div>
            </>
        );
    }
    
}





export default ItemCount;