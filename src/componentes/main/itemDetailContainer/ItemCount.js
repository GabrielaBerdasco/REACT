import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../styleMain.css"


const ItemCount = ({item, addToCart, onAdd, removeCounter, mostrar}) => {
    const [contador, setContador] = useState (1);


    const sumar = () => {
        if (contador < item.stock) {
        setContador (contador + 1)
        }
    }

    const restar = () => {
        if (contador > 1) {
        setContador (contador - 1)
        }
    }

    const notify = () => {
        toast("Agregaste " + contador + " productos al carrito", {
            position: "top-center",
            autoClose: 3000,
        });
    }

        return (
            <>
                <ToastContainer />
                {mostrar ? (
                <div className="contadorContainer">
                    <div>   
                        <button onClick={sumar} className="contadorSuma">+</button>
                        <label className="contadorEtiqueta">{contador}</label>
                        <button onClick={restar} className="contadorResta">-</button>  
                    </div>
                    <button onClick={() => {onAdd(contador, setContador); notify(); removeCounter(); addToCart(item.id, item, contador)}} className="contadorAgregar">Agregar al carrito</button>
                </div>
                ) : (
                <div className="contadorContainer">
                    <h3>Productos en carrito</h3>
                    <h6>Por favor, finalice su compra</h6>
                    <Link to="/carrito"><button className="contadorAgregar">Ir al carrito</button></Link>
                </div>
                )}
            </>
            
        )    
}





export default ItemCount;