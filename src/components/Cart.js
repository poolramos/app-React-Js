import { useContext } from "react";
import { contexto } from "./CartContext";

const Cart = () => {

    const { carrito , removeItem , clear } = useContext(contexto)

    return ( 
        <div>
            Cart

            {carrito.map(item =>
                <div key={item.item.id}>
                    {item.item.title} x {item.quantity} - ${item.item.price * item.quantity}
                    <button onClick={()=>removeItem(item.item.id)}>borrar</button>
                </div>
            )}
        </div>
    )
}
 
export default Cart;