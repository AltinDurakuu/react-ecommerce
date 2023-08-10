import React from 'react';
import './../styles/CheckoutProducts.css'

const CheckoutProducts = () => {
  const cartItems = JSON.parse(localStorage.getItem('cartItems'));

  const calculateTotalPrice = () => {
    if(cartItems){
      let total = 0;
      cartItems.forEach((item) => {
        total += parseFloat(item.price) * item.quantity;
      });
      return total.toFixed(2);
      }
      return null
    };
  
  return (
    <div className="checkout-products-container">
      <h2 className="checkout-products-title">Your Cart</h2>
      {cartItems?.map((item, index) => (
        <div key={index} className="checkout-product">
          <h3 className="product-name">{item.productName}</h3>
          <p className="product-quantity">Quantity: {item.quantity}</p>
          <p className="product-price">Price: ${parseFloat(item.price).toFixed(2)}</p>
          <p className="product-total">Total: ${(parseFloat(item.price) * item.quantity).toFixed(2)}</p>
          <hr className="product-divider" />
        </div>
      ))}
      <div className="checkout-products-total">
        <h2>Total: ${cartItems && calculateTotalPrice()}</h2>
      </div>
    </div>
  );
};

export default CheckoutProducts;
