import {Provider} from "../contexto"
import {useState} from "react"

const CustomProvider = ({children}) => {

    const [nombre,setNombre] = useState("Pool")
    

    const cambiarNombre = () => {
        setNombre("Jonathan")
    }
    

    const valorDelContexto = {
        nombre : nombre,
        cambiarNombre : cambiarNombre
    }

    return(
        <Provider value={{nombre,cambiarNombre}}>
            {children}
        </Provider>
    )
}

export default CustomProvider