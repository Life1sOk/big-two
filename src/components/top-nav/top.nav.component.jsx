import React from "react"; 

import './top.nav.style.scss';

const TopNav = () => {
    return(
        <div className="top-nav-container">
            <div className="top-nav-links">
                <span>About</span>
                <span>Order</span>
                <span>Pay</span>
                <span>Delivery</span>
                <span>Contacts</span>
            </div>
            <div className="top-nav-ikons">Ikons</div>
        </div>
    )
}       

export default TopNav;