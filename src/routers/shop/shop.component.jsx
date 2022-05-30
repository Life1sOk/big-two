import React from "react";
import { useContext } from "react";

import { ProductsContext } from "../../contexts/products.context";

import './shop.style.scss';

const Shop = () => {
    const {products} = useContext(ProductsContext)

    return(
        <div>
            {products.map(({name, id}) => (
                <div key={id}>{name}</div>
            ))}
        </div>
    );
}

export default Shop;