import { useContexto } from "../../context/CartProvider";
import CartList from "./CartList";
import { NavLink } from "react-router-dom";
import { db } from "../../firebase"
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import Form from "./Form";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./cart.css"
import ItemDetailContainer from "../main/itemDetailContainer/ItemDetailContainer";


const Cart = () => {

const [usuario, setUsuario] = useState({})
const [validar, setValidar] = useState(false)
const [ordenId, setOrdenId] = useState("")
const {productsToCart, totalAmount, clear} = useContexto()

const finalizarCompra = () => {

  const ventaColeccion = collection(db, "ventas")
  addDoc(ventaColeccion, {
    comprador: usuario,
    items: productsToCart,
    date: serverTimestamp(),
    total: totalAmount,
  })
  .then( (resultado) => {
    notify(resultado.id)
    clear()
  })
  .catch( (error) => {
    console.error(error);
  })
}

const notify = (orden) => {
  toast("Orden de compra: n° " + orden, {
    position: "top-center",
    autoClose: 10000,
    closeOnClick: false,
   } );
}
const formulario = (nombre, apellido, email) => {
  setUsuario({
    nombre: nombre, 
    apellido: apellido,
    email: email
  })
  setValidar(!validar)
}

    return (
      <section className="cart">
          <h1 className="cartTittle">Carro de compras</h1>
          {productsToCart.length > 0 ? (
            <>
              <h3 className="cartTittle">Productos seleccionados:</h3>
              <CartList products={productsToCart} />
              <button onClick={() => clear()} className="contadorAgregar">Eliminar productos</button>
              <h3 className="cartTittle">Precio Total: ${totalAmount}</h3>
              <Form formulario={formulario} />
              {validar ? (
                <button onClick={() => finalizarCompra()}  className="contadorAgregar">Finalizar Compra</button>
              ) : (
                <h5 className="errorFormulario">Por favor, ingrese sus datos para terminar la compra</h5>
              )}
            </>
          ) : (
            <>
              <ToastContainer />
              <h4 className="cartTittle">(Todavía no hay productos seleccionados)</h4>
              <NavLink to="/home"><button className="contadorAgregar">Ir a Inicio</button></NavLink>
              <h3 className="cartTittle">O consulta tu pedido:</h3>
              <form className="formulario">
                  <input type="text" placeholder="Número de orden" onChange={(e) => setOrdenId(e.target.value)} />
              </form>
                  {ordenId.length === 20 ? (<ItemDetailContainer ordenId={ordenId} />) : ( <h6>Ingrese su número de orden (20 caracteres)</h6> )}
            </>
          )}  
        </section>
    )
}

export default Cart
