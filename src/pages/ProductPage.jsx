import React, {useEffect, useState} from "react";
import axios from "axios";
import { useParams, NavLink } from "react-router-dom";
import "./../styles/ProductPage.css"
import ImageSlider from "../components/ImagesSlider";

function ProductPage() {
  const {productId} = useParams();
  const [product, setProduct] = useState({})
  const [images, setImages] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost/Api/api.php", {
        params: {
          productId: productId,
          limit:1
        },
      });
      setProduct(response.data[0]);
      console.log(response.data)
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    if (product.idproduct) {
      const productImages = Array.from({ length: 2 }, (_, index) => `../src/assets/product${parseInt(product.idproduct)}.jpg`);
      setImages(productImages);
    }
  }, [product]);

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
                                    <p className="price-wrapper"><span className="product-item-little-desc_product-price">${product.price}</span> <del className="product-item-little-desc_old-product-price">${product.old_price}</del></p>
                                    <p className="product-desc_content-text">{product.description}</p>
                                </div>
                                <div className="wishlist-cart">
                                        <button type="submit"  id="add-to-wishlist-btn">Add to cart</button>
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




