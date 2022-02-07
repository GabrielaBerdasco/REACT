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
                <h6 className="emptyCart">Todavía no agregaste productos al carrito</h6>
            </div>
        )
        }
        </>
    );
}

export default CartWidget