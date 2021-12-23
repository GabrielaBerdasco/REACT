import { NavLink } from "react-router-dom";

const CartWidget = () => {
    return(
        <>
            <NavLink to="/carrito"><span className="material-icons icono">shopping_cart</span></NavLink>
        </>
    );
}

export default CartWidget