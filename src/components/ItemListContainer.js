import { useEffect, useState } from "react";

import ItemCount from "./ItemCount"
import ItemList from "./ItemList";
import {useParams} from "react-router-dom"

const productosInit = [
    { id: 1, title: "Computadoras", description: "Equipos de computo", price: 100 , pictureUrl : "http://placehold.it/400x200" , categoria : "1" },
    { id: 2, title: "Suministros", description: "Suministros diversos", price: 200 , pictureUrl : "http://placehold.it/400x200" , categoria : "2" }
]


const ItemListContainer = ({greeting}) => {

    const [cantidad, setCantidad] = useState(0)
    const [items, setItems] = useState([])
    const params = useParams()

    useEffect(() => {

        const promesa = getItem()
        promesa.then(json=>{
            setItems(json)
        })

    }, [])

    const getItem = () => {


        const promesa = new Promise((res,rej)=>{
            setTimeout(() => {

                if(params.id){
                    res(productosInit.filter(producto=>producto.id == params.id))
                }
                else{
                    res(productosInit)
                }
            }, 2000)
        })

        return promesa
    }

    const onAdd = (cantidad) => {
        console.log(cantidad)
    }

    return(
        <div>
            {/* <ItemCount stock={5} initial={1} onAdd={onAdd}/> */}
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer