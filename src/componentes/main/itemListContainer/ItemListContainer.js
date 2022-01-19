import ItemList from "./ItemList";
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { db } from "../../../firebase";
import { getDocs, collection, query, where } from "firebase/firestore"
import "../styleMain.css"

const ItemListContainer = ({nombre, apellido}) => {

    const [productos, setProductos] = useState([]);
    const { name } = useParams()

    
    useEffect(() => {

        const collectionFB = collection(db, "products")
        
        if (name) {
            const queryCategory = query(collectionFB, where("categoria", "==", name))
            getDocs(queryCategory)
            .then( ({ docs }) => {
            setProductos(docs.map( (doc) => ({ id: doc.id, ...doc.data() })))
            })
            .catch( (error) => {
                console.log(error);
            })
        } else {
            getDocs(collectionFB)
            .then( ({ docs }) => {
            setProductos(docs.map( (doc) => ({ id: doc.id, ...doc.data() }) ) )
            })
            .catch( (error) => {
                console.log(error);
            })
        }
    }, [name]);
    
    return (
        <section>
            <h2 className="itemListContainer">
            ¡Bienvenido a nuestra tienda virtual, {nombre} {apellido}!
            </h2>
            <article>
                <h3 className="itemListContainer">Productos Destacados</h3>
                <ItemList productos={productos}/>
            </article>
        </section>
    );
}

export default ItemListContainer;