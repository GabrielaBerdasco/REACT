import ItemDetail from "./ItemDetail"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { db } from "../../../firebase";
import { collection, getDoc, doc } from "firebase/firestore"
import "../styleMain.css"
import CartList from "../../cart/CartList";

const ItemDetailContainer = ({ordenId}) => {

    const [item, setItem] = useState(null);
    const { id } = useParams()

    const [pedido, setPedido] = useState(null)

    useEffect(() => {

        if(id) {
            const collectionFB = collection(db, "products")
    
            const queryId = doc(collectionFB, id)
                getDoc(queryId)
                .then( (result) => {
                setItem({id: id, ...result.data()})
                })
                .catch( (error) => {
                    console.error(error);
                })
        } else if(ordenId.length === 20) {
                const collectionOI = collection(db, "ventas")
                const queryId = doc(collectionOI, ordenId)
                    getDoc(queryId)
                    .then( (result) => {
                    setPedido(result.data())
                  })
                  .catch( (error) => {
                      console.error(error);
                  })
              }
    }, [id, ordenId]);

    return (
        <article>
            {id ? (
            <ItemDetail item={item} />
            ) : (
            <div>
                {pedido !== null ? (
                <>
                    <CartList products={pedido.items}/>
                    <h4 className="cartTittle">Fecha del pedido: {pedido.date.toDate().toString()}</h4>
                    <h4 className="cartTittle">Total de la compra: ${pedido.total}</h4>
                </>
                ) : (<h4 className="cartTittle">Cargando pedido...</h4>)}
            </div>
            )}
            
        </article>
    )
}

export default ItemDetailContainer
