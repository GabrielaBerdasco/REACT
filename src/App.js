//COMPONENTES
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./componentes/header/Navbar";
import ItemListContainer from "./componentes/main/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/main/itemDetailContainer/ItemDetailContainer";
import Cart from "./componentes/header/Cart";
import Nosotros from "./componentes/main/Nosotros";
import Home from "./componentes/main/Home";


const App = () => {
    
    const navbarLinks = [
        {href: "/nosotros", name:"Nosotros", id: "1" },
        {href: "/category/hogar", name:"Hogar", id: "2" },
        {href: "/category/accesorios", name:"Accesorios", id: "3" }
    ]


    return (
        <BrowserRouter>
            <Navbar navbarLinks={navbarLinks}/>
            <main>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/nosotros" element={<Nosotros/>} />
                    <Route path="/category/:name" element={<ItemListContainer nombre={"Diego"} apellido={"Grassino"}/>} />
                    <Route path="/carrito" element={<Cart/>} />
                    <Route path="/producto/:id" element={<ItemDetailContainer />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;