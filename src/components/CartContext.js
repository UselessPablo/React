import React from "react";
import { useState, useContext } from 'react';
const CartContext = React.createContext([]);


 export const UseCartContext =()=> useContext(CartContext);

const CartProvider = ({children})=>{
    const [cart, setCart]=useState ([]);
   
   const AddProduct =(item,NewQuantity)=>{
    const NewCart = cart.filter(prod => prod.id !== item.id);
    NewCart.push({...item, quantity:NewQuantity});
    setCart(NewCart)
   }

    const ClearCart =()=> setCart([])
   const IsInCart =(id) => {return cart.find(product => product.id === id)? true: false};
   const RemoveCart =(id) => setCart(cart.filter(product => product.id !== id)) ;

   
   
   
   
    return(
        <CartContext.Provider value ={{
            ClearCart,
            IsInCart,
            RemoveCart,
            AddProduct
        }}>
            {children}
        </CartContext.Provider>
    )
}

  
export default CartProvider;