import { useState } from "react"

const Form = ({formulario}) => {

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [email, setEmail] = useState("")
    
    return (
        <form className="formulario">
            <input type="text" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)} />
            <input type="text" placeholder="Apellido" onChange={(e) => setApellido(e.target.value)} />
            <input type="email" placeholder="Correo Electrónico" onChange={(e) => setEmail(e.target.value)} />
            {nombre.length>2 && apellido.length>2 ? (
                <button onClick={(e) =>{ e.preventDefault(); formulario(nombre, apellido, email)}} className="contadorAgregar">Guardar Datos</button>
            ) : (
                <h5 className="errorFormulario">Por favor, ingrese sus datos</h5>
            )
            }
        </form>
    )
    
}

export default Form