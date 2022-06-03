import { COLLECTION_ACTION_TYPES } from './collection.type';

export const initialStateCollection = {
    collections: [],
}

export const collectionReducer = (state = initialStateCollection, action) => {
    const { type, payload } = action;

    switch(type) {
        case COLLECTION_ACTION_TYPES.GET_COLLECTION:
            return { 
                ...state,
                collections: payload }
        default: return state;
    }
}