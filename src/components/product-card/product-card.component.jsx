import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addItemToCart } from '../../store-redux/cart/cart.action';
import { selectCartItems } from '../../store-redux/cart/cart.selector';

import './product-card.style.scss';
import Button from "../button/button.component";

const ProductCard = ({product}) => {
    const { name, price, picture, id } = product;
    const dispatch = useDispatch()
    const cartItem = useSelector(selectCartItems);

    const addItemToCartHandler = () => {
        return dispatch(addItemToCart(cartItem, product));
    }

    return(
        <div className="product-card-container" key={id}>
            <div className="card-wrap-container">
                <img alt={name} src={typeof(picture) === "string" ? `${picture}` : `${picture[0]}`}/>
                <div className="footer">
                    <span className="price">{price}</span>
                    <span className="name">{name}</span>
                </div>
                <Button buttonType='inverted' onClick={addItemToCartHandler}>Add to cart</Button>
            </div>
        </div>
    );
}

export default ProductCard;