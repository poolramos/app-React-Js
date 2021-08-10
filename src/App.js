import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import "./estilos.css"
import {BrowserRouter , Route , Switch} from "react-router-dom"

const App = () => {

    return (
        <BrowserRouter>
            <NavBar />

            <Switch>
                <Route path="/" component={ItemListContainer} exact />
                <Route path="/categoria/:id"  component={ItemListContainer} />
            </Switch>

        </BrowserRouter>
    )
}



export default App