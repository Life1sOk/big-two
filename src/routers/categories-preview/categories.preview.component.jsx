import React from "react";
import { useSelector } from 'react-redux';

import CategoryPreview from '../../components/category-preview/category-preview.component';
import { selectorCollectionMap } from '../../store-redux/collection/collection.selector';
import './categories.preview.style.scss';

const CategoriesPreview = () => {
    const collectionMap = useSelector(selectorCollectionMap);

    return(
        <div className='categories-preview-container'>
            { Object.keys(collectionMap).map(title => {
                const products = collectionMap[title]
                return <CategoryPreview key={title} title={title} products={products}/>
               })}
        </div>
    );
}

export default CategoriesPreview;