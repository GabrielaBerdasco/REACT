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



const Cart = () => {

const [usuario, setUsuario] = useState({})

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
    console.log(resultado.id);
    notify(resultado.id)
    clear()
  })
}

const notify = (orden) => {
  toast("Orden de compra: n° " + orden );
}
const formulario = (nombre, apellido, email) => {

  setUsuario({
    nombre: nombre, 
    apellido: apellido,
    email: email
  })
}

    return (
      <section className="cart">
          <h1 className="cartTittle">Carro de compras</h1>
          {productsToCart.length > 0 ? (
            <>
              <h3 className="cartTittle">Productos seleccionados:</h3>
              <CartList productsToCart={productsToCart} />
              <button onClick={() => clear()} className="contadorAgregar">Eliminar productos</button>
              <h3 className="cartTittle">Precio Total: ${totalAmount}</h3>
              <Form formulario={formulario} />
                <button onClick={() => finalizarCompra()} className="contadorAgregar">Finalizar Compra</button>
            </>
          ) : (
            <>
              <ToastContainer />
              <h4 className="cartTittle">(Todavía no hay productos seleccionados)</h4>
              <NavLink to="/"><button className="contadorAgregar">Ir a Inicio</button></NavLink>
            </>
          )}  
        </section>
    )
}

export default Cart
