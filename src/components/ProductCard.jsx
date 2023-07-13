import React from "react";
import "./../styles/ProductCard.css"
import { NavLink } from "react-router-dom";

function ProductCard({productId, productName, outofstock, productType, price, sale, oldPrice}){
    return (
        <div className="product-item">
            <div className="product-item_img">
                {outofstock && <div className="out-of-stock">Out Of Stock</div>}
                {oldPrice>0 && <div className="sale">SALE!</div>}
                <NavLink href="#">
                    <img src={`src/assets/product${productId}.jpg`} alt="" />
                </NavLink>
                <div className="add-item-somewhere">
                    <NavLink href="#" className="add-to-cart">Add to Cart</NavLink>
                    {/* <a href="#" className="add-to-favourite"><img src="dist/images/favourite.svg" alt=""/></a> */}
                </div>
            </div>
            <div className="product-item-little-desc">
                <div><NavLink className="product-item-little-desc_categories-name">{productType}</NavLink></div>
                <div><NavLink className="product-item-little-desc_product-name">{productName}</NavLink></div>
                {oldPrice>0 && <del className="product-item-little-desc_old-product-price">${oldPrice}</del>}
                <span className="product-item-little-desc_product-price">${price}</span>
            </div>
        </div>
    )
}

export default ProductCard;