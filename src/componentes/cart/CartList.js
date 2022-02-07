import CartButton from "./CartButton"


const CartList = (props) => {

    return (
        <article className="cartCards">
            {props.products.map( (item) => ( 
                <CartButton key={item.id} product={item.product} quantity={item.quantity} totalPrice={item.totalPrice} />   
            )
            )}
        </article>
    )
}

export default CartList
