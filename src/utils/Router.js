import { Route, Routes, HashRouter } from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetailContainer";
import Layout from "./Layout";
import Cart from "../components/Cart";
import ItemListContainer from "../components/ItemListContainer";
import Compra from '../components/Compra'
import QuienesSomos from "../pages/QuienesSomos";
import Home from '../components/Home'
import Galeria from "../pages/Galeria";

const Router = () => (
    // <BrowserRouter basename={process.env.PUBLIC_URL}>
        <HashRouter basemane='/'>
        
        <Routes>
            <Route element={<Layout />}>
                <Route path='/detalle/:detalleid' element={<ItemDetailContainer />} />
                <Route index element={<Home/>} />
                <Route path='/pages/Galeria' element={<Galeria/>}/>
                <Route path="/category/:name" element={<ItemListContainer />} />
                <Route path='/Cart' element={<Cart />} />
                <Route path='/page2/Compra' element={<Compra />} />
                <Route path='/pages/QuienesSomos' element={<QuienesSomos />} />
                {/* <Route path='/Registration' element={<Registration/>} /> */}
                {/* <Route path='/Login' element={<Login />} /> */}
                {/* <Route path='/Reset' element={<Reset />} /> */}
            </Route>
        </Routes>
           
        </HashRouter>
    // </BrowserRouter>
)
export default Router;