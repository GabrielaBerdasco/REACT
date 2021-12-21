//COMPONENTES
import Header from "./componentes/header/Header";
import ItemListContainer from "./componentes/main/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/main/itemDetailContainer/ItemDetailContainer";



const App = () => {
    return (
        <>
            <Header />
            <article>
                <ItemListContainer nombre={"Diego"} apellido={"Grassino"}/>
            </article>
            <article>
                <ItemDetailContainer />
            </article>
        </>
    );
}

export default App;