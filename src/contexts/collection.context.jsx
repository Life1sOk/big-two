import React from "react";
import { createContext, useState, useEffect } from "react";

import { getProductsAndItems } from '../utils/firebase/firebase.utils';

export const CollectionContext = createContext({
    collectionMap: {},
    setShopData: () => null,
})

export const CollectionProvider = ({children}) => {
    const [collectionMap, setCollectionMap] = useState({});

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