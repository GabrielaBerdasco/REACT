import ItemList from "./ItemList";
import { useState, useEffect } from "react"
import "./styleMain.css"

const productosPromesa = () => {
    return new Promise((resolve) => {
        setTimeout(
            ()=>
            resolve([
                {id: "1", nombre: "Yerbera", descripción: "Yerbera con pico vertedor grande, flores fondo negro.", precio: 1116, stock: 2},
                {id: "2", nombre: "Escurridor", descripción: "Escurridor de cubiertos, cepillos o pinceles.", precio: 552, stock: 7},
                {id: "3", nombre: "Mate shine", descripción: "Mate shine glitter con asa, bombilla y sistema de vaciado.", precio: 506, stock: 5},
                {id: "4", nombre: "Yerbera", descripción: "Yerbera con pico vertedor grande, modelo flores rosa.", precio: 1116, stock: 12},
                {id: "5", nombre: "Set yerbera y azucarera", descripción: "Set yerbera y azucarera de hojalata, modelo terrazo.", precio: 1182, stock: 15},
            ]),3000
        )
    })
}

const ItemListContainer = ({nombre, apellido}) => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        productosPromesa().then((data) => {
            setProductos(data);
        })
    }, []);

    return (
        <>
            <h2 className="itemListContainer">
            ¡Bienvenido a nuestra tienda virtual, {nombre} {apellido}!
            </h2>
            <div>
                <ItemList productos={productos}/>
            </div>
        </>
    );
}

export default ItemListContainer;