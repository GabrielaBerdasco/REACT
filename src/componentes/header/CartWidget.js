import { NavLink } from "react-router-dom";
import { useContexto } from "../../context/CartProvider";

const CartWidget = () => {
    
    const { productsQuantity } = useContexto()
    
    return(
        <>
            <NavLink to="/carrito" className= "cartWidget">
                <span className="material-icons icono">
                    shopping_cart
                </span>
                {productsQuantity}
            </NavLink>
        </>
    );
}

export default CartWidget