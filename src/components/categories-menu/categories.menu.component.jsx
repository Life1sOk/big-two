import React from "react";

import './categories.menu.style.scss';

import CategoryItem from "../category-item/category.item.component";

const categories = [
    {
      id: 1,
      title: "bracelets",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    //   route: 'shop/hats'
    },
    {
      id: 2,
      title: "earrings",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    //   route: 'shop/jackets'
    },
    {
      id: 3,
      title: "rings",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    //   route: 'shop/sneakers'
    },
    {
      id: 4,
      title: "necklaces",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    //   route: 'shop/womens'
    },
    {
      id: 5,
      title: "modular decoration",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    //   route: 'shop/mens'
    }
  ];
  

const CategoriesMenu = () => {
    return(
        <div className="categories-menu-container">
            {categories.map(category => (
                <CategoryItem category={category}/>
                ))}
        </div>
    )
}   

export default CategoriesMenu;