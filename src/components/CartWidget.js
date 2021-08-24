import { useContext } from "react"
import { Link } from "react-router-dom"
import { contexto } from "./CartContext"


const CartWidget = () => {

    const { carrito } = useContext(contexto)
    
    return (
        <Link to="/cart">
            <button className="material-icons">shopping_cart</button>
            {carrito.length ? carrito.length : null}
        </Link>
    )
}

export default CartWidget