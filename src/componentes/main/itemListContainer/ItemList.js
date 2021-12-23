import Item from "./Item"

const ItemList = ({productos}) => {
    
    return(
        <div className="contenedorCards">
            {productos.map((item) => (
             <Item key={item.id} imagen={item.imagen} nombre={item.nombre} precio={item.precio} href={item.href}/>   
            )
            )}
        </div>
    );
}

export default ItemList