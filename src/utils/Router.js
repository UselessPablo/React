import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetailContainer";
import Layout from "./Layout";
import Cart from "../components/Cart";
import ItemListContainer from "../components/ItemListContainer";
import Compra from '../components/Compra'
import QuienesSomos from "../pages/QuienesSomos";
import Login from "../components/Login";
import Registration from "../components/Registration";
import Reset from "../components/Reset";


const Router = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route element={<Layout />}>
                <Route path='/detalle/:detalleid' element={<ItemDetailContainer />} />
                <Route index element={<ItemListContainer />} />
                <Route path="/category/:name" element={<ItemListContainer />} />
                <Route path='/Cart' element={<Cart />} />
                <Route path='/page2/Compra' element={<Compra />} />
                <Route path='/pages/QuienesSomos' element={<QuienesSomos />} />
                <Route path='/Registration' element={<Registration/>} />
                <Route path='/Login' element={<Login />} />
                <Route path='/Reset' element={<Reset />} />
            </Route>
        </Routes>
    </BrowserRouter>
)
export default Router;