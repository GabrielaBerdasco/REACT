
import "./itemListContainer.css"

const ItemListContainer = ({nombre, apellido}) => {
    return (
        <h2 className="itemListContainer">
            ¡Bienvenido a nuestra tienda virtual, {nombre} {apellido}!
        </h2>
    );
}

export default ItemListContainer;