import CartWidget from "./CartWidget";

const Navbar = () => {
    return (
        <nav className="nav">
            <h1 className="brand">Tienda Bonachona</h1>
            <ul>
                <li><a href="./public/index.html">Nosotros</a></li>
                <li><a href="./public/index.html">Hogar</a></li>
                <li><a href="./public/index.html">Accesorios</a></li>
            </ul>
            <CartWidget />
        </nav>
    );
}

export default Navbar;