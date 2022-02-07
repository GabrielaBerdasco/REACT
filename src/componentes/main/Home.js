import { Link } from "react-router-dom"
import ItemListContainer from "./itemListContainer/ItemListContainer"
import "./styleMain.css"

const Home = () => {
    return (
        <section>
            <article className="bannerInicio">
                <h3>¡BIENVENIDO A LA TIENDA!</h3>
                <h1 className="tittle">Que disfrutes tu búsqueda</h1>
                <h4>Regalar siempre es bueno</h4>
            </article>
            <article className="inicioCategorías">
                <img src="https://dl.dropboxusercontent.com/s/ig08109teihkjv1/YerberaNegra.jpeg?dl=0" alt="Yerbera de lata" className="itemImage" />
                <h1 className="linkTittle"><Link to="/hogar">Hogar</Link></h1>
            </article>
            <article className="inicioCategorías">
                <h1 className="linkTittle"><Link to="/accesorios">Accesorios</Link></h1>
                <img src="https://dl.dropboxusercontent.com/s/ce6oxs9d9dcj4v6/CuadernoImagine.jpeg?dl=0" alt="Cuaderno" className="itemImage" />
            </article>
            <article>
                <h3 className="itemListContainer">Productos Destacados</h3>
                <ItemListContainer/>
            </article>
        </section>
    )
}

export default Home
