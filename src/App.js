import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import "./estilos.css"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import CustomProvider from "./components/CartContext"
import Cart from "./components/Cart"

const App = () => {

    return (
        <CustomProvider>
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route path="/" component={ItemListContainer} exact />
                    <Route path="/categoria/:id" component={ItemListContainer} />
                    <Route path="/item/:id" component={ItemDetailContainer} />
                    <Route path="/cart" component={Cart} />
                </Switch>
            </BrowserRouter>
        </CustomProvider>

    )
}



export default App