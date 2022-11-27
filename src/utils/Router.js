import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetailContainer";
import Layout from "./Layout";
import Cart from "../components/Cart";
import ItemListContainer from "../components/ItemListContainer";
import Compra from '../components/Compra'
import QuienesSomos from "../pages/QuienesSomos";

const Router = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route element={<Layout />}>
                <Route path='/detalle/:detalleid' element={<ItemDetailContainer/>} />
                <Route index element={<ItemListContainer />} />
                <Route path="/category/:name" element={<ItemListContainer />} />
                <Route path='/Cart' element={<Cart/>} />
                <Route path='/page2/Compra' element={<Compra/>} />
                <Route path='/pages/QuienesSomos' element={<QuienesSomos/>} />
            </Route>
        </Routes>
    </BrowserRouter>

)
export default Router;