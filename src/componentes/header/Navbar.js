import React from "react";

const Navbar = () => {
    return (
        <nav className="nav">
            <h1 className="brand">Tienda Bonachona</h1>
            <ul>
                <li><a href="../public/index.html">Nosotros</a></li>
                <li><a href="../public/index.html">Productos</a></li>
                <li><a href="../public/index.html">Carro de compras</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;