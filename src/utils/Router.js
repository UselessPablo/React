import { Route, Routes, HashRouter } from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetailContainer";
import Layout from "./Layout";
import Cart from "../components/Cart";
import ItemListContainer from "../components/ItemListContainer";
import Compra from '../components/Compra'
import ItemDetailSearch from '../components/ItemDetailSearch'
import QuienesSomos from "../pages/QuienesSomos";
import Home from '../components/Home'
import Galeria from "../pages/Galeria";
import WorkShops from "../pages/WorkShops";
import {AuthProvider} from '../components/Auth'
import Login from "../components/Login";
import Register from "../components/Register";
const Router = () => (
    // <BrowserRouter basename={process.env.PUBLIC_URL}>
    <AuthProvider>
       <HashRouter basemane='/'>
        
        <Routes>
            <Route element={<Layout />}>
                <Route path='/detalle/:detalleid' element={<ItemDetailContainer />} />
                <Route path='/detalle2/:itemId' element={<ItemDetailSearch/>} />
                <Route index element={<Home/>} />
                <Route path='/pages/Galeria' element={<Galeria/>}/>
                <Route path='/pages/Workshops' element={<WorkShops/>} />
                <Route path="/category/:name" element={<ItemListContainer />} />
                <Route path='/Cart' element={<Cart />} />
                <Route path='/page2/Compra' element={<Compra />} />
                <Route path='/pages/QuienesSomos' element={<QuienesSomos />} />
                <Route path='/Registro' element={<Register/>} />
                <Route path='/Login' element={<Login />} />
                {/* <Route path='/Reset' element={<Reset />} /> */}
            </Route>
        </Routes>
           
        </HashRouter>
    </AuthProvider>
    // </BrowserRouter>
)
export default Router;