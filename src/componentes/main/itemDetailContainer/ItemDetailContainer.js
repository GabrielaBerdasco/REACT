import ItemDetail from "./ItemDetail"
import { useState, useEffect } from "react"
import "../styleMain.css"

const producto = () => {
    return new Promise((resolve) => {
        setTimeout(
            ()=>
            resolve({
                id: "1", imagen: "https://dl.dropboxusercontent.com/s/ig08109teihkjv1/YerberaNegra.jpeg?dl=0",nombre: "Yerbera", descripción: "Yerbera con pico vertedor grande, flores fondo negro.", precio: 1116, stock: 7
            }),2000
        )
    })
}

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);

    useEffect(() => {
        producto().then((data) => {
            setItem(data);
        })
    }, []);


    return (
        <>
            <ItemDetail item={item} />
        </>
    )
}

export default ItemDetailContainer
