import ItemList from "./ItemList";
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import "../styleMain.css"

const productosPromesa = () => {
    return new Promise((resolve) => {
        setTimeout(
            ()=>
            resolve([
                {id: "1", imagen: "https://dl.dropboxusercontent.com/s/ig08109teihkjv1/YerberaNegra.jpeg?dl=0",nombre: "Yerbera", descripción: "Yerbera con pico vertedor grande, flores fondo negro.", precio: 1116, stock: 2, categoria: "hogar", href: "productos/1"},
                {id: "2", imagen: "https://dl.dropboxusercontent.com/s/rg3e81ppjrag2du/WhatsApp%20Image%202021-12-23%20at%2012.42.29.jpeg?dl=0",nombre: "Escurridor", descripción: "Escurridor de cubiertos, cepillos o pinceles.", precio: 552, stock: 7, categoria: "accesorios", href: "productos/2"},
                {id: "3", imagen: "https://dl.dropboxusercontent.com/s/ektd5b6ie2nyfnr/MateShine.jpeg?dl=0",nombre: "Mate shine", descripción: "Mate shine glitter con asa, bombilla y sistema de vaciado.", precio: 506, stock: 5, categoria: "hogar", href: "productos/3"},
                {id: "4", imagen: "https://dl.dropboxusercontent.com/s/cs8y8w1766s6ool/YerberaRosa.jpeg?dl=0",nombre: "Yerbera", descripción: "Yerbera con pico vertedor grande, modelo flores rosa.", precio: 1116, stock: 12, categoria: "hogar", href: "productos/4"},
                {id: "5", imagen: "https://dl.dropboxusercontent.com/s/e0u8zmcztr2zjqq/SetYyA.jpeg?dl=0",nombre: "Set yerbera y azucarera", descripción: "Set yerbera y azucarera de hojalata, modelo terrazo.", precio: 1182, stock: 15, categoria: "accesorios", href: "productos/5"},
            ]),2000
        )
    })
}

const ItemListContainer = ({nombre, apellido}) => {

    const [productos, setProductos] = useState([]);
    const { name } = useParams()

    
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