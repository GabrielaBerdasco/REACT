import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
import "./header.css";

const Navbar = ({navbarLinks}) => {
    return (
        <header className="header">
            <nav className="nav">
                <h1 className="brand"><NavLink to="/">Tienda Bonachona</NavLink></h1>
                <ul>
                    {navbarLinks.map( (element) => {
                        return <NavLink key={element.id} to={element.href}><li>{element.name}</li></NavLink>
                    })
                }
                </ul>
                <CartWidget />
            </nav>
        </header>
    );
}

export default Navbar;