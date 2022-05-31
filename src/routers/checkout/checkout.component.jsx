import React from "react";
import { useContext } from "react";

import CheckoutItem from "../../components/checkout-item/checkout.item.component";
import { CartContext } from "../../contexts/cart.context"; 

import './checkout.style.scss';

const Checkout = () => {
    const { cartItem, addItemToCart, removeCartItem, clearItemFromCart, cartTotal } = useContext(CartContext);

    return(
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {cartItem.map(cart => 
            <CheckoutItem 
            key={cart.id} 
            cartItem={cart} 
            addItemToCart={addItemToCart} 
            removeCartItem={removeCartItem} 
            clearItemFromCart={clearItemFromCart} />)}
            <div className='total'>TOTAL: ${cartTotal}</div>
        </div>
    );
}

export default Checkout;