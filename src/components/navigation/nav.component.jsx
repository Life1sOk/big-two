import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { CartContext } from '../../contexts/cart.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';
import { selectCurrentUser } from '../../store-redux/user/user.selector';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';

import './nav.style.scss';

const Navigation = () => {
    const { cartOpen } = useContext(CartContext);
    const currentUser = useSelector(selectCurrentUser)
    
    return(
        <div className='nav-container'>
            <Link to='/'>
                <span className='logo'>Kleo4YOU</span>
            </Link>
            {/* <div className='search-box-container'>
                <input type="searchbox" placeholder='Search'></input>
                <div className='contacts'>Number</div>
            </div> */}
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