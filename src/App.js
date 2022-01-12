//COMPONENTES
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./componentes/header/Navbar";
import ItemListContainer from "./componentes/main/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/main/itemDetailContainer/ItemDetailContainer";
import Cart from "./componentes/cart/Cart";
import Nosotros from "./componentes/main/Nosotros";
import Home from "./componentes/main/Home";
import CartProvider from "./context/CartProvider";


const App = () => {
    
    const navbarLinks = [
        {href: "/nosotros", name:"Nosotros", id: "1" },
        {href: "/hogar", name:"Hogar", id: "2" },
        {href: "/accesorios", name:"Accesorios", id: "3" }
    ]


    return (
        <CartProvider>
            <BrowserRouter>
                <Navbar navbarLinks={navbarLinks}/>
                <main>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/nosotros" element={<Nosotros/>} />
                        <Route path="/:name" element={<ItemListContainer nombre={"Diego"} apellido={"Grassino"}/>} />
                        <Route path="/carrito" element={<Cart/>} />
                        <Route path="/:name/productos/:id" element={<ItemDetailContainer />} />
                    </Routes>
                </main>
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;