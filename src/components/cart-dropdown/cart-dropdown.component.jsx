import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Button from '../button/button.component';
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from '../../store-redux/cart/cart.selector';

import './cart-dropdown.style.scss';

const CartDropDown = () => {
    const cartItem = useSelector(selectCartItems)

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