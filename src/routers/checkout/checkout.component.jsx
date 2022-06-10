import React from "react";
import { useSelector } from "react-redux";

import { selectCartItems, selectCartTotal } from '../../store-redux/cart/cart.selector';

import './checkout.style.scss';
import CheckoutItem from "../../components/checkout-item/checkout.item.component";

const Checkout = () => {
    const cartItem = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

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
            cart={cart} 
            />)}
            <div className='total'>TOTAL: ${cartTotal}</div>
        </div>
    );
}

export default Checkout;