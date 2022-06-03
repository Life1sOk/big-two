import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';

import ProductCard from "../../components/product-card/product-card.component";
import { selectorCollectionMap } from '../../store-redux/collection/collection.selector';

import './category.style.scss';

const Category = () => {
    const { category } = useParams()
    const collectionMap = useSelector(selectorCollectionMap);
    const [products, setProducts] = useState(collectionMap[category]);

  useEffect(() => {
    setProducts(collectionMap[category]);
  }, [category, collectionMap]);

    return(
        <>
        <div className="pages-category-container">
          <h2 className="category-title">{category.toUpperCase()}</h2>
          <div className="category-container">
              { products &&
                  products.map((product) => (
                      <ProductCard key={product.id} product={product}/>
                      ))}
          </div>
        </div>
        </>
    );
}

export default Category;