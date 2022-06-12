import { COLLECTION_ACTION_TYPES } from './collection.type';

export const initialStateCollection = {
    collections: [],
    isLoading: false,
    error: null,
}

export const collectionReducer = (state = initialStateCollection, action) => {
    const { type, payload } = action;

    switch(type) {
        case COLLECTION_ACTION_TYPES.FETCH_COLLECTION_START:
            return { ...state, isLoading: true };
        case COLLECTION_ACTION_TYPES.FETCH_COLLECTION_SUCCESS:
            return { ...state, collections: payload, isLoading: false };
        case COLLECTION_ACTION_TYPES.FETCH_COLLECTION_FAILED:
            return { ...state, error: payload, isLoading: false };
        default: return state;
    }
}
