import { BrowserRouter, Route, Routes } from "react-router-dom";
import Item from "../components/Item";
import ItemDetailContainer from "../components/ItemDetailContainer";
import Layout from "./Layout";
import ItemList from "../components/ItemList";
import Compras from "../pages/compras";
import Detalle from "../components/Detalle";

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route path='/descripcion/:id' element={<ItemDetailContainer />} />
                <Route index element={<ItemList />} />
                <Route path="/page2/:nombre" element={<Item />} />
                <Route path='/compras/:nombre' element={<Compras />} />
                <Route path='productos/Mates' element={<Detalle />} />
            </Route>
        </Routes>
    </BrowserRouter>
)
export default Router;