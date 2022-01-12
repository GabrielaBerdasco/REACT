
import { useContexto } from "../../context/CartProvider";
import CartList from "./CartList";


const Cart = () => {

const {productsToCart} = useContexto()
  console.log(productsToCart);
  
    return (
        <section>
          <h1 className="cartTittle">Carro de compras</h1>
          <h3 className="cartTittle">Productos seleccionados:</h3>  
          <CartList productsToCart={productsToCart} />
        </section>
    )
}

export default Cart
