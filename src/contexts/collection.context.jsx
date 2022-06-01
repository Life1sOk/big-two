import React from "react";
import { createContext, useEffect, useReducer } from "react";

import { getProductsAndItems } from '../utils/firebase/firebase.utils';

export const CollectionContext = createContext({
    collectionMap: {},
});

export const initialStateCollection = {
    collectionMap: {},
}

export const COLLECTION_ACTION_TYPES = {
    GET_COLLECTION_MAP: 'GET_COLLECTION_MAP',
}

export const collectionReducer = (state, action) => {
    const { type, payload } = action;

    switch(type) {
        case COLLECTION_ACTION_TYPES.GET_COLLECTION_MAP:
            return { 
                ...state,
                collectionMap: payload }
        default:
            throw new Error(`error type ${type} in collectionReducer`)
    }
}

export const CollectionProvider = ({children}) => {
    const [ {collectionMap}, dispatch ] = useReducer(collectionReducer, initialStateCollection);

    const setCollectionMap = (categoryMap) => {
        dispatch({type: COLLECTION_ACTION_TYPES.GET_COLLECTION_MAP, payload: categoryMap })
    }

    useEffect(() => {
        const getCategoriesMap = async () => {
           const categoryMap = await getProductsAndItems()
           setCollectionMap(categoryMap);
        };
        getCategoriesMap();
    }, []);

    const value = { collectionMap, setCollectionMap }

    return <CollectionContext.Provider value={value}>{children}</CollectionContext.Provider>
}