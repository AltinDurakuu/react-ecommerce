import React, {useEffect, useState, useContext} from "react";
import axios from "./../components/axios";
import { useParams } from "react-router-dom";
import "./../styles/ProductPage.css"
import ImageSlider from "../components/ImagesSlider";
import { AppContext } from "../components/AppContext";

function ProductPage() {
  const {productId} = useParams();
  const [product, setProduct] = useState({})
  const [images, setImages] = useState([]);
  const { cartItems, setCartItems } = useContext(AppContext);
  const productInCart = cartItems.find((item) => item.productId === productId);
  const quantityInCart = productInCart ? productInCart.quantity : 0;
  const fetchData = async () => {
    try {
      const response = await axios.get("/api.php", {
        params: {
          productId: productId,
          limit:1
        },
      });
      setProduct(response.data[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
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
      const {name, type, price, old_price} = product
      const productName = name;
      const productType = type;
      setCartItems((prevCartItems) => [
        ...prevCartItems,
        {
          productId,
          productName,
          productType,
          price,
          old_price,
          quantity: 1,
        },
      ]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    if (product.idproduct) {
      const productImages = Array.from({ length: 2 }, (_, index) => {
          return (index===0?
          `../src/assets/product${product.idproduct}.jpg` :
          `../src/assets/product${product.idproduct}-2.jpg`)
          });      setImages(productImages);
    }
  }, [product]);
  
  const handleDecrementQuantity = (e) => {
    e.stopPropagation();
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.productId === productId && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ).filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveFromCart = (e) => {
    e.stopPropagation();
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.productId !== productId)
    );
  };

  return (
    <main className="full-block">
            <div className="full-block product-section">
            <div className="container full-product-page">
                <div className="about-product-n-info">
                    <div className="about-product">
                        <div className="products-photos">
                          <ImageSlider images={images} />
                        </div>
                        <div className="product-desc">
                            <div className="product-desc_content">
                                <div><h2>
                                    {product.name}
                                  </h2></div>
                                <div>
                                    <p className="price-wrapper"><span className="product-item-little-desc_product-price">${product.price}</span> {product.old_price ? <del className="product-item-little-desc_old-product-price">${product.old_price}</del> : null}</p>
                                    <p className="product-desc_content-text">{product.description}</p>
                                </div>
                                <div className="wishlist-cart">
                                <div className="product-page-btns">
                                  <div className="product-page-add-remove">
                                    <button onClick={handleAddToCart} type="submit"  id="add-to-wishlist-btn">Add to cart</button>
                                    <button onClick={handleRemoveFromCart} type="submit"  id="add-to-wishlist-btn">Remove from cart</button>
                                  </div>
                                  <div className="quantity-controls">
                                    <div>
                                      Control the quantity
                                      <button onClick={handleDecrementQuantity} className="quantity-btn">
                                        -
                                      </button>
                                      <button onClick={handleAddToCart} className="quantity-btn">
                                        +
                                      </button>
                                    </div>
                                  </div>        
                                </div>
                                        <div>
                                          <p>The item has been added to the cart: {quantityInCart} times</p>
                                        </div>
                                    <div className="wishlist-and-share">
                                        <p>Category:<span id="product-category-name">{product.type}</span></p>
                                        {/* <div className="share-product-social-medias">
                                            <p>Share it:</p>
                                            <ul>
                                                <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                                                <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                            </ul>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      <div>{productId}</div>
    </main>
  );
}

export default ProductPage;




