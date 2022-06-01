import React from "react";
import { useContext } from "react";

import Button from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";

import './product-card.style.scss';

const ProductCard = ({product}) => {
    const { name, price, picture, id } = product;
    const { addItemToCart } = useContext(CartContext);

    const addItemToCartHandler = () => {
        return addItemToCart(product);
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