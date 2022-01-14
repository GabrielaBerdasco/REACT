/* import Item from "../main/itemListContainer/Item" */
import CartButton from "./CartButton"


const CartList = ({productsToCart}) => {

    return (
        <article className="cartCards">
            {productsToCart.map( (item) => ( 
            <CartButton product={item.product} quantity={item.quantity} totalPrice={item.totalPrice} />   
            )
            )}
        </article>
    )
}



export default CartList
