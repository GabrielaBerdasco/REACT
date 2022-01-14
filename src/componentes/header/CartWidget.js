import { NavLink } from "react-router-dom";
import { useContexto } from "../../context/CartProvider";

const CartWidget = () => {
    
    const { productsQuantity } = useContexto()
    
    return(
        <>
        {productsQuantity !== 0 ? (
            <NavLink to="/carrito" className= "cartWidget">
                <span className="material-icons icono">
                    shopping_cart
                </span>
                {productsQuantity}
            </NavLink>
        ) : (
            <div>
                
            </div>
        )
        }
        </>
    );
}

export default CartWidget