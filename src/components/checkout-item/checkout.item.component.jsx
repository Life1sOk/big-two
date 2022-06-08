import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectCartItems } from '../../store-redux/cart/cart.selector';
import './checkout.item.style.scss';

const CheckoutItem = ({cart, addItemToCart, removeCartItem, clearItemFromCart}) => {
    const { name, count, picture, price } = cart;
    const dispatch = useDispatch()
    const cartItem = useSelector(selectCartItems)

    const incrementHandler = () => {
        return dispatch(addItemToCart(cartItem, cart))
    }

    const decremetnHangler = () => {
        return dispatch(removeCartItem(cartItem, cart))
    }

    const clearItemHandler = () => {
        return dispatch(clearItemFromCart(cartItem, cart))
    }

    return(
        <div className="check-out-item-container">
            <div className="image-container">
                <img alt={name} src={typeof(picture) === "string" ? `${picture}` : `${picture[0]}`}/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={decremetnHangler}>&#10094;</div>
                <span className="price">{count}</span>
                <div className="arrow" onClick={incrementHandler}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className='remove-button' onClick={clearItemHandler}>
                &#10005;
            </div>
        </div>
    );
}

export default CheckoutItem;