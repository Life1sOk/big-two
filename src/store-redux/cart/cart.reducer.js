import { CART_ACTION_TYPES } from './cart.type';

export const CART_INITIAL_STATE = {
    cartOpen: false,
    cartItem: [],
}


export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
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
                cartItem: payload,
            }
        default: return state;
    }

}
