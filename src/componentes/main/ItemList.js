/* import { useState, useEffect } from "react" */
import Item from "./Item"

const ItemList = ({productos}) => {
    /* const [productos, setProductos] = useState([]);

    useEffect(() => {
        productosPromesa().then((data) => {
            setProductos(data);
        })
    }, []); */


    console.log(productos)
    return(
        <div className="contenedorCards">
            {productos.map((item) => (
             <Item key={item.id} nombre={item.nombre} descripción={item.descripción} precio={item.precio} stock={item.stock}/>   
            )
            )}
        </div>
    );
}

export default ItemList