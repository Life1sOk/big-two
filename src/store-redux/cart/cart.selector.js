import { createSelector } from "@reduxjs/toolkit";

export const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
    [selectCartReducer],
    (cart) => cart.cartItem
);

export const selectCartOpen = createSelector(
    [selectCartReducer],
    (cart) => cart.cartOpen
);

export const selectCartCount = createSelector(
    [selectCartItems],
    (cartItem) => {
       return cartItem.reduce((acc, cart) => cart.count + acc , 0)   
    } 
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItem) => {
       return cartItem.reduce((total, cart) => total + cart.count * cart.price, 0 )
    }
);