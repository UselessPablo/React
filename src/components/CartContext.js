import React from "react";
import { useState, useContext } from 'react';

import ItemListContainer from './ItemListContainer';

export
  const CartContext = React.createContext([]);
export const UseCartContex = () => useContext(CartContext)

const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  const totalPrice = () => { return cart.reduce((prev, act) => prev + act.cantidad * act.precio, 0); }

  const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.cantidad, 0);

  const redirectTo = () => { <ItemListContainer /> }

  const cleanCart = () => setCart([]);

  const isInCart = (id) => { return cart.find(product => product.id === id)}

  const removeProduct = (id) => setCart(cart.filter(product => product.id !== id))

  const addProduct = (item, newQuantity) => {
 
    const { cantidad = 0 } = cart.find(prod => prod.id === item.id) || {};
    const newCart = cart.filter(prod => prod.id !== item.id)
    setCart([...newCart, { ...item, cantidad: cantidad + newQuantity }])
  }

  return (
    <CartContext.Provider value={{
      cleanCart, isInCart, removeProduct, addProduct, totalPrice, totalProducts, redirectTo,
      cart
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;