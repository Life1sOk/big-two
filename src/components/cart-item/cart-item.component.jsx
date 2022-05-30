import React from "react";

import './cart-item.style.scss';

const CartItem = ({cartItem}) => {
    const { name, count, picture, price } = cartItem;

    return(
        <div className="cart-item-container">
            <img alt={name} src={typeof(picture) === "string" ? `${picture}` : `${picture[0]}`}/>
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">{count} x {price}</span>
            </div>
        </div>
    );
}

export default CartItem;