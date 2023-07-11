import React from "react";
import "./../styles/ProductCard.css"

function ProductCard({name, outofstock, productName, productType, price, sale, oldPrice}){
    return (
        <a className="product-item">
            <div className="product-item_img">
                {outofstock && <div className="out-of-stock">Out Of Stock</div>}
                {sale && <div className="sale">SALE!</div>}
                <a href="#">
                    <img src={`src/assets/${productName}.jpg`} alt="" />
                </a>
                <div className="add-item-somewhere">
                    <a href="#" className="add-to-cart">Add to Cart</a>
                    {/* <a href="#" className="add-to-favourite"><img src="dist/images/favourite.svg" alt=""/></a> */}
                </div>
            </div>
            <div className="product-item-little-desc">
                <div><a href="#" className="product-item-little-desc_categories-name">{productType}</a></div>
                <div><a href="#" className="product-item-little-desc_product-name">{name}</a></div>
                {sale && <del className="product-item-little-desc_old-product-price">${oldPrice}</del>}
                <span className="product-item-little-desc_product-price">${price}</span>
            </div>
        </a>
    )
}

export default ProductCard;