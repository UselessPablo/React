
import { UseCartContex } from './CartContext'

const ItemCart = ({product, cantidad}) => {
const { removeProduct } = UseCartContex(); 


  return (
    <div className='center3'>
        <h2>{product.name}</h2>
        <p>$ {product.precio} x {product.cantidad} unidades</p>
        <img className="imagenes3" src={product.img} alt='xx'></img>
        <p>subtotal : $ {product.cantidad * product.precio}</p>
        <button onClick={()=> removeProduct(product.id) }>Borrar</button>
        
    </div>
  )
}

export default ItemCart