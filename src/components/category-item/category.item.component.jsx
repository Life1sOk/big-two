import React from "react";
import { useNavigate } from "react-router-dom";

import './category.item.style.scss';

const CategoryItem = ({category}) => {
    const {title, imageUrl, route} = category;
    const link = useNavigate();

    const navigateLinkHandler = () => link(route);

    return(
        <div className='category-item-container' onClick={navigateLinkHandler}>
            <div className="img" alt={title} style={{backgroundImage: `url(${imageUrl})`}}/>
            <div className="body">
                <h2>{title.toUpperCase()}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    )
}

export default CategoryItem;