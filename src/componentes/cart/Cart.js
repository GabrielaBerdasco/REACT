import { useContexto } from "../../context/CartProvider";
import CartList from "./CartList";
import "./cart.css"
import { NavLink } from "react-router-dom";


const Cart = () => {

const {productsToCart, totalAmount, clear} = useContexto()
  console.log(productsToCart);

    return (
        <section className="cart">
          <h1 className="cartTittle">Carro de compras</h1>
          {productsToCart.length > 0 ? (
            <>
              <h3 className="cartTittle">Productos seleccionados:</h3>
              <CartList productsToCart={productsToCart} />
              <button onClick={() => clear()} className="contadorAgregar">Eliminar productos</button>
              <h3 className="cartTittle">Precio Total: ${totalAmount}</h3>
            </>
          ) : (
            <>
              <h4 className="cartTittle">(Todavía no hay productos seleccionados)</h4>
              <button className="contadorAgregar"><NavLink to="/">Ir a Inicio</NavLink></button>
            </>
          )}  
        </section>
    )
}

export default Cart
