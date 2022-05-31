import React from "react";
import { useContext, Fragment } from "react";

import { CollectionContext } from '../../contexts/collection.context';
import ProductCard from "../../components/product-card/product-card.component";

import './shop.style.scss';

const Shop = () => {
    const { collectionMap } = useContext(CollectionContext)

    return(
        <>
            { Object.keys(collectionMap).map(title => (
                <Fragment key={title}>
                    <h2>{title}</h2>
                    <div className="products-container">
                        {collectionMap[title].map((product) => (
                            <ProductCard key={product.id} product={product}/>
                        ))}
                    </div>
               </Fragment>
               ))
            }
        </>
    );
}

export default Shop;