import React from "react";
import { createContext, useReducer } from "react";

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

//---------------------//
export const CART_ACTION_TYPES = {
    CART_TOGGLE: 'CART_TOGGLE',
    UPPDAT_CART_ITEMS: 'UPPDAT_CART_ITEMS',
}

export const INITIAL_STATE = {
    cartOpen: false,
    cartItem: [],
    cartTotal: 0,
    cartCount: 0,
}


export const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch(type) {
        case CART_ACTION_TYPES.CART_TOGGLE : 
            return {
                ...state,
                cartOpen: payload,
            };
        case CART_ACTION_TYPES.UPPDAT_CART_ITEMS : 
            return {
                ...state,
                ...payload,
            }
        default: throw new Error(`error type ${type} in cartReducer`)
    }

}

//---------------------//

export const CartOpenProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
    const { cartOpen, cartItem, cartTotal, cartCount } = state;
    const setCartOpen = (bool) => {
       return dispatch({type: CART_ACTION_TYPES.CART_TOGGLE, payload: bool})
    }

    const updateCartItemsReducer = (newCartItem) => {
        const newCartCount = cartItem.reduce((acc, cart) => cart.count + acc , 0);
        const newCartTotal = cartItem.reduce(
            (total, cart) => total + cart.count * cart.price, 0 );

        const payload = {
            cartItem: newCartItem,
            cartCount: newCartCount,
            cartTotal: newCartTotal,
        }

        dispatch({type: CART_ACTION_TYPES.UPPDAT_CART_ITEMS, payload})
    }

    const addItemToCart = (productToAdd) => {
        const newCartItem = addCartItem(cartItem, productToAdd);
        updateCartItemsReducer(newCartItem)
    }

    const removeCartItem = (productToRemove) => {
        const newCartItem = cartItemRemove(cartItem, productToRemove);
        updateCartItemsReducer(newCartItem)
    }

    const clearItemFromCart = (productToClear) => {
        const newCartItem = clearCartItem(cartItem, productToClear);
        updateCartItemsReducer(newCartItem)
    }

    const value = { cartOpen, setCartOpen, cartItem, addItemToCart, cartCount, removeCartItem, clearItemFromCart, cartTotal };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}