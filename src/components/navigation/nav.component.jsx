import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { signOutStart } from '../../store-redux/user/user.action';

import { selectCurrentUser } from '../../store-redux/user/user.selector';
import { selectCartOpen } from '../../store-redux/cart/cart.selector';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';

import './nav.style.scss';

const Navigation = () => {
    const dispatch = useDispatch()

    const cartOpen = useSelector(selectCartOpen);
    const currentUser = useSelector(selectCurrentUser);

    const signOutUser = () => {
        return dispatch(signOutStart())
    }
    
    return(
        <div className='nav-container'>
            <Link to='/'>
                <span className='logo'>Kleo4YOU</span>
            </Link>
            <div className='wrap-log-in'>
                <Link to='/shop'>
                    <span className='fix'>Shop</span>
                </Link>
                {
                    currentUser ? 
                    <span onClick={signOutUser} className='sign-out'>Sign OUT</span> : 
                    <Link to='/auth'>
                        <span className='fix'>Sign In</span>
                    </Link>
                }
                
                <CartIcon />
            </div>
            {cartOpen && <CartDropDown />}
        </div>
    );
}

export default Navigation;