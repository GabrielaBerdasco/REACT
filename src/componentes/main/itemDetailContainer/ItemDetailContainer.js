import ItemDetail from "./ItemDetail"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { db } from "../../../firebase";
import { collection, getDoc, doc } from "firebase/firestore"
import "../styleMain.css"

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const { id } = useParams()
    console.log(id);

    useEffect(() => {

        const collectionFB = collection(db, "products")

        const queryId = doc(collectionFB, id)
            getDoc(queryId)
            .then( (result) => {
            setItem({id: id, ...result.data()})
            })
            .catch( (error) => {
                console.log(error);
            })
    }, [id]);

    return (
        <article>
            <ItemDetail item={item} />
        </article>
    )
}

export default ItemDetailContainer
