import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./componentes/header/Navbar";
import ItemListContainer from "./componentes/main/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/main/itemDetailContainer/ItemDetailContainer";
import Cart from "./componentes/cart/Cart";
import Nosotros from "./componentes/main/Nosotros";
import Home from "./componentes/main/Home";
import CartProvider from "./context/CartProvider";
import { useEffect, useState } from "react";
import { db } from "../src/firebase";
import { getDocs, collection } from "firebase/firestore"



const App = () => {

    const [navbarLinks, setNavbarLinks] = useState(null)

    useEffect( () => {

        const collectionNL = collection(db, "categorias")
        
            getDocs(collectionNL)
            .then( ({ docs }) => {
            setNavbarLinks(docs.map( (doc) => ({ id: doc.id, ...doc.data() })))
            })
            .catch( (error) => {
                console.error(error);
            })
        
    }, []);
    
    return (
        <CartProvider>
            <BrowserRouter>
                <Navbar navbarLinks={navbarLinks}/>
                <main>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/nosotros" element={<Nosotros/>} />
                        <Route path="/:name" element={<ItemListContainer nombre={"Horacio"} apellido={"Gutierrez"}/>} />
                        <Route path="/carrito" element={<Cart/>} />
                        <Route path="/productos/:id" element={<ItemDetailContainer />} />
                    </Routes>
                </main>
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;