import { combineReducers } from 'redux';

import { userReducer } from './user/user.reducer';
import { collectionReducer } from './collection/collection.reducer';
import { cartReducer } from './cart/cart.reducer';

export const rootReducer = combineReducers({
    user: userReducer,
    collection: collectionReducer,
    cart: cartReducer,
});