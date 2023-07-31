import React, { useState, useContext, useEffect } from "react";
import "./../styles/ProductCard.css";
import { NavLink } from "react-router-dom";
import { AppContext } from "./AppContext";

function ProductCard({
  productId,
  productName,
  outofstock,
  productType,
  price,
  sale,
  oldPrice,
  cart,
}) {
  const { cartItems, setCartItems } = useContext(AppContext);
  const productInCart = cartItems.find((item) => item.productId === productId);
  const quantityInCart = productInCart ? productInCart.quantity : 0;

  const handleAddToCart = () => {
    const productInCart = cartItems.find((item) => item.productId === productId);

    if (productInCart) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems((prevCartItems) => [
        ...prevCartItems,
        {
          productId,
          productName,
          outofstock,
          productType,
          price,
          oldPrice,
          quantity: 1,
        },
      ]);
    }
  };

  const handleDecrementQuantity = () => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.productId === productId && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ).filter((item) => item.quantity > 0)
    );
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  return (
    <div className="product-item">
      <div className="product-item_img">
        {outofstock && <div className="out-of-stock">Out Of Stock</div>}
        {oldPrice > 0 && <div className="sale">SALE!</div>}
        <NavLink>
          <img src={`src/assets/product${productId}.jpg`} alt="" />
        </NavLink>
        <div className="add-item-somewhere">
          {!cart ? (
            <NavLink onClick={handleAddToCart} className="add-to-cart">
              Add to Cart
            </NavLink>
          ) : (
            <NavLink onClick={handleDecrementQuantity} className="add-to-cart">
              Remove from cart
            </NavLink>
          )}
          <div className="quantity-controls">
            <button onClick={handleDecrementQuantity} className="quantity-btn">
              -
            </button>
            <span className="quantity">{quantityInCart}</span>
            <button onClick={handleAddToCart} className="quantity-btn">
              +
            </button>
          </div>
        </div>
      </div>
      <div className="product-item-little-desc">
        <div>
          <NavLink className="product-item-little-desc_categories-name">
            {productType}
          </NavLink>
        </div>
        <div>
          <NavLink className="product-item-little-desc_product-name">
            {productName}
          </NavLink>
        </div>
        {oldPrice > 0 && (
          <del className="product-item-little-desc_old-product-price">
            ${oldPrice}
          </del>
        )}
        <span className="product-item-little-desc_product-price">${price}</span>
      </div>
    </div>
  );
}

export default ProductCard;