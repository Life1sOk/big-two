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

const cartItemRemove = ( cartItem, productToRemove) => {
   const existingCartItem = cartItem.find( item => item.id === productToRemove.id);

   if(existingCartItem.count === 1) {
       return cartItem.filter(item => item.id !== productToRemove.id);
   }

   return cartItem.map(item => item.id === productToRemove.id ? 
    {...item, count: item.count - 1} : item)
}

const clearCartItem = (cartItems, productToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== productToClear.id);


export const CartContext = createContext({
    cartOpen: false,
    setCartOpen: () => {},
    cartItem: [],
    addItemToCart: () => {},
    removeCartItem: () => {},
    clearItemFromCart: () => {},
    cartTotal: 0,
    cartCount: 0,
});

export const CartOpenProvider = ({children}) => {
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItem, setCartItem] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect( ()=> {
        const newCartCount = cartItem.reduce((acc, cart) => cart.count + acc , 0);
        setCartCount(newCartCount);
    }, [cartItem])

    useEffect(() => {
        const newCartTotal = cartItem.reduce(
          (total, cart) => total + cart.count * cart.price, 0 );
        setCartTotal(newCartTotal);
      }, [cartItem]);

    const addItemToCart = (productToAdd) => {
        setCartItem(addCartItem(cartItem, productToAdd));
    }

    const removeCartItem = (productToRemove) => {
        setCartItem(cartItemRemove(cartItem, productToRemove));
    }

    const clearItemFromCart = (productToClear) => {
        setCartItem(clearCartItem(cartItem, productToClear));
    }

    const value = { cartOpen, setCartOpen, cartItem, addItemToCart, cartCount, removeCartItem, clearItemFromCart, cartTotal };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}