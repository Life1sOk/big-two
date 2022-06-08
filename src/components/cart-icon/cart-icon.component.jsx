import React from "react";
import { ReactComponent as ShopingIcon } from '../../assets/shopping-bag.svg';
import { useSelector, useDispatch } from "react-redux";

import { setCartOpen } from '../../store-redux/cart/cart.action';
import { selectCartCount, selectCartOpen } from '../../store-redux/cart/cart.selector';

import './cart-icon.style.scss';

const CartIcon = () => {
    const dispatch = useDispatch();

    const cartOpen = useSelector(selectCartOpen);
    const cartCount = useSelector(selectCartCount);

    const toggleCartOpen = () => dispatch(setCartOpen(!cartOpen));

    return(
        <div className="cart-icon-container" onClick={toggleCartOpen}>
            <ShopingIcon className="shopping-icon"/>
            <span className="item-count">{cartCount}</span>
        </div>
    );
}

export default CartIcon;