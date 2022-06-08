import { CART_ACTION_TYPES } from './cart.type';
import { createAction } from '../../utils/reducer/reducer.utils';

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
 

export const setCartOpen = (boolean) => createAction(CART_ACTION_TYPES.CART_TOGGLE, boolean)

export const addItemToCart = (cartItem, productToAdd) => {
    const newCartItem = addCartItem(cartItem, productToAdd);
    return createAction(CART_ACTION_TYPES.UPPDAT_CART_ITEMS, newCartItem)
}

export const removeCartItem = (cartItem, productToRemove) => {
    const newCartItem = cartItemRemove(cartItem, productToRemove);
    return createAction(CART_ACTION_TYPES.UPPDAT_CART_ITEMS, newCartItem)
}

export const clearItemFromCart = (cartItem, productToClear) => {
    const newCartItem = clearCartItem(cartItem, productToClear);
    return createAction(CART_ACTION_TYPES.UPPDAT_CART_ITEMS, newCartItem)
}
