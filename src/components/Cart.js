import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { UseCartContex } from './CartContext'
import ItemCart from './ItemCart';



const Cart = () => {
  const {cart, totalPrice} = UseCartContex();
 
const order ={
items: cart.map(producto => ({ id: producto.id, nombre: producto.nombre, precio: producto.precio, cantidad: producto.cantidad })),
    total: totalPrice(),
  }
 const buyer ={
  comprador: {
    name: '',
      email: '',
        phone: '',
          addres: '',
  }
}
  const [comprador, setComprador] = useState(order,buyer);
const inputCapture = (e) =>{
  const {name, value}= e.target
setComprador({...comprador, [name]:value})

}

 const handleClick = (e)=>{
   e.preventDefault();
  const db = getFirestore();
  const ordersCollection = collection(db, 'order');
  addDoc(ordersCollection, comprador)
  .then(({id})=> console.log(id));
//  alert('Sus datos fueron ingresados correctamente, Gracias');
//  setTimeout(() => {
  setComprador({...buyer,...order})
// }, 3000);

 }
 
    if (cart.length <= 0){
        return(
            <>
                <div className='center2'>
              <p>Sus datos se ingresaron correctamente, el envio esta en proceso</p>
                <Link to='/'>Seguir comprando</Link>
            </div>
            </>
        );
    }
     
    
  
  
  return (
    <>
        {
            cart.map(product => <ItemCart key={product.id} product={product}/>)
        }
    <h2 className='center2'> Total: $ {totalPrice()}</h2>
      
      <h3> Ingrese sus datos para el envio</h3>
      <div className='formulario'>
      <form action={handleClick}>
        <label>Nombre</label>
        <input   name='name' placeholder='Nombre' onChange={inputCapture} value={comprador.name} />
        <label>Email</label>
          <input name='email' placeholder='Email' onChange={inputCapture} value={comprador.email} />
        <label>Dirección</label>
          <input name='direccion' placeholder='Dirección' onChange={inputCapture} value={comprador.addres} />
        <label>Teléfono</label>
          <input name='telefono' placeholder='Teléfono' onChange={inputCapture} value={comprador.phone} />
          
      </form>

        <button className='compra' onClick={handleClick}>Confirmar Compra</button> 
        <h3 className='center2'> Total: $ {totalPrice()}</h3>
      </div>
    </>
  )
}

export default Cart