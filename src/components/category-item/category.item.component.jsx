import React from "react";

import './category.item.style.scss';

const CategoryItem = ({category}) => {
    const {id, title, imageUrl} = category;

    return(
        <div id={id} className='category-item-container'>
            <div className="img" alt={title} style={{backgroundImage: `url(${imageUrl})`}}/>
            <div className="body">
                <h2>{title.toUpperCase()}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    )
}

export default CategoryItem;