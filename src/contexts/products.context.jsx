import React from "react";
import { createContext, useState } from "react";

import ProductsData from '../shop-data.json';

export const ProductsContext = createContext({
    products: [],
    setShopData: () => null,
})

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState(ProductsData);
    const value = { products, setProducts }

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}