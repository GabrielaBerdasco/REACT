//COMPONENTES
import Header from "./componentes/header/Header";
import ItemListContainer from "./componentes/main/ItemListContainer";



const App = () => {
    return (
        <>
            <Header />
            <article>
                <ItemListContainer nombre={"Diego"} apellido={"Grassino"}/>
            </article>
        </>
    );
}

export default App;