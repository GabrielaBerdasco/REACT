import ItemCount from "./ItemCount";
import "./styleMain.css"

const ItemListContainer = ({nombre, apellido}) => {

    const onAdd = (contador, setContador) => {
        if (contador !== 0) {
        setContador (1)
        }
    }

    return (
        <>
            <h2 className="itemListContainer">
            ¡Bienvenido a nuestra tienda virtual, {nombre} {apellido}!
            </h2>
            <ItemCount stock={5} inicial={1} onAdd={onAdd}/>
        </>
    );
}

export default ItemListContainer;