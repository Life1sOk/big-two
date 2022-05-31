import React from "react";
import { useContext } from "react";
import { CollectionContext } from '../../contexts/collection.context';

import CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoriesPreview = () => {
    const { collectionMap } = useContext(CollectionContext)

    return(
        <div className='category-preview-container'>
            { Object.keys(collectionMap).map(title => {
                const products = collectionMap[title]
                return <CategoryPreview key={title} title={title} products={products}/>
               })}
        </div>
    );
}

export default CategoriesPreview;