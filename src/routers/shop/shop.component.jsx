import React from "react";
import { useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import CategoriesPreview from "../categories-preview/categories.preview.component";
import Category from "../../routers/category/category.component";
import { setCollection } from "../../store-redux/collection/collection.action";
import { getProductsAndItems } from '../../utils/firebase/firebase.utils';;

const Shop = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        const getCategoriesMap = async () => {
           const categoriesArray = await getProductsAndItems()
        //    dispatch(setCollection(categoriesArray));
           dispatch(setCollection(categoriesArray));
        };
        getCategoriesMap();
    }, [dispatch]);

    return(
        <Routes>
            <Route index element={<CategoriesPreview />}/>
            <Route path=':category' element={<Category />}/>
        </Routes>
    );
}

export default Shop;