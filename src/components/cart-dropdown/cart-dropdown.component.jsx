import React from "react";
import { useContext } from 'react';
import { Link } from "react-router-dom";

import Button from '../button/button.component';
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from '../../contexts/cart.context';

import './cart-dropdown.style.scss';

const CartDropDown = () => {
    const { cartItem } = useContext(CartContext);

    return(
        <div className="cart-dropdown-container">
            <div className='cart-items'>
                {cartItem.length ? cartItem.map(cart => <CartItem key={cart.id} cartItem={cart} />) : 
                (<span className='empty-message'>Your cart is empty</span>)}
            </div>
            <Link to='/check-out'>
                <Button>Go to checkout</Button>
            </Link>
        </div>
    );
}

export default CartDropDown;