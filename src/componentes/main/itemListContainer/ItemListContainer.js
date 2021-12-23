import ItemList from "./ItemList";
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import "../styleMain.css"

const productosPromesa = () => {
    return new Promise((resolve) => {
        setTimeout(
            ()=>
            resolve([
                {id: "1", nombre: "Yerbera", descripción: "Yerbera con pico vertedor grande, flores fondo negro.", precio: 1116, stock: 2, categoria: "Hogar"},
                {id: "2", nombre: "Escurridor", descripción: "Escurridor de cubiertos, cepillos o pinceles.", precio: 552, stock: 7, categoria: "Accesorios"},
                {id: "3", nombre: "Mate shine", descripción: "Mate shine glitter con asa, bombilla y sistema de vaciado.", precio: 506, stock: 5, categoria: "Hogar"},
                {id: "4", nombre: "Yerbera", descripción: "Yerbera con pico vertedor grande, modelo flores rosa.", precio: 1116, stock: 12, categoria: "Hogar"},
                {id: "5", nombre: "Set yerbera y azucarera", descripción: "Set yerbera y azucarera de hojalata, modelo terrazo.", precio: 1182, stock: 15, categoria: "Accesorios"},
            ]),3000
        )
    })
}

const ItemListContainer = ({nombre, apellido}) => {

    const [productos, setProductos] = useState([]);
    const { name } = useParams()
    console.log(name);

    useEffect(() => {
        productosPromesa().then((data) => {
            if (name) {
                const result = data.filter( (item) =>
                    item.categoria === name
                )
                setProductos(result)
            } else {
                setProductos(data);
            }
        })
    }, [name]);
    console.log(productos);
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