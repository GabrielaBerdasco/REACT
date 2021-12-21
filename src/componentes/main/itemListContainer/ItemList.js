import Item from "./Item"

const ItemList = ({productos}) => {
    
    return(
        <div className="contenedorCards">
            {productos.map((item) => (
             <Item key={item.id} nombre={item.nombre} precio={item.precio} />   
            )
            )}
        </div>
    );
}

export default ItemList