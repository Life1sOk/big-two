import React from "react";
import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItem, productToAdd) => {
   const existingCartItem = cartItem.find( item => item.id === productToAdd.id);

   if(existingCartItem) {
       return cartItem.map(item => item.id === productToAdd.id ? 
        {...item, count: item.count + 1} : item)
   }

   return [...cartItem, {...productToAdd, count: 1}]
}

export const CartContext = createContext({
    cartOpen: false,
    setCartOpen: () => {},
    cartItem: [],
    addItemToCart: () => {},
    cartCount: 0,
});

export const CartOpenProvider = ({children}) => {
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItem, setCartItem] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect( ()=> {
        const newCartCount = cartItem.reduce((acc, cart) => cart.count + acc , 0);
        setCartCount(newCartCount);
    }, [cartItem])

    const addItemToCart = (productToAdd) => {
        setCartItem(addCartItem(cartItem, productToAdd));
    }

    const value = { cartOpen, setCartOpen, cartItem, addItemToCart, cartCount };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}