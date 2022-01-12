import { useContexto } from "../../context/CartProvider";
import CartList from "./CartList";
import "./cart.css"


const Cart = () => {

const {productsToCart, clear} = useContexto()
  console.log(productsToCart);
  
    return (
        <section>
          <h1 className="cartTittle">Carro de compras</h1>
          {productsToCart.length > 0 ? (
            <>
              <h3 className="cartTittle">Productos seleccionados:</h3>
              <CartList productsToCart={productsToCart} />
              <button onClick={() => clear()} className="contadorAgregar">Eliminar productos</button>
            </>
          ) : (
            <h4 className="cartTittle">(Todavía no hay productos seleccionados)</h4>
          )}  
        </section>
    )
}

export default Cart
