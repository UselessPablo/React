
import Item from "./Item";
import Navbar from "./Navbar";
const ItemList = ({ data = [] }) => {
 console.log(data);
  return (
    data.map(Productos => <Item key={Productos.id} info={Productos} />)
  
    )
}
export default ItemList;