import React from "react";
import { ReactComponent as ShopingIcon } from '../../assets/shopping-bag.svg';

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import './cart-icon.style.scss';

const CartIcon = () => {
    const { cartOpen, setCartOpen, cartCount } = useContext(CartContext);

    const toggleCartOpen = () => setCartOpen(!cartOpen);

    return(
        <div className="cart-icon-container" onClick={toggleCartOpen}>
            <ShopingIcon className="shopping-icon"/>
            <span className="item-count">{cartCount}</span>
        </div>
    );
}

export default CartIcon;