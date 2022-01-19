import { Link } from "react-router-dom"
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
                <img src="https://dl.dropboxusercontent.com/s/rg3e81ppjrag2du/WhatsApp%20Image%202021-12-23%20at%2012.42.29.jpeg?dl=0" alt="Escurridor" className="itemImage" />
            </article>
        </section>
    )
}

export default Home
