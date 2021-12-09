//Usar el mismo nombre que el componente, primera letra en mayúscula
//Las variables solo están disponibles por archivo asique hay que exportarlas antes de importar

//https://developers.google.com/fonts/docs/material_icons
//https://fonts.google.com/icons

//COMPONENTES
import Header from "./componentes/header/Header";
import ItemListContainer from "./componentes/itemListContainer/ItemListContainer"


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