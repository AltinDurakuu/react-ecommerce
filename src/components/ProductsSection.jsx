import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import "./../styles/ProductsSection.css";
import axios from "./axios";

function ProductsSection({ sectionTitle, sectionPhrase, filter, id }) {
  const [products, setProducts] = useState([]);
  let saleSection = false;
  if(filter == "sale_percentage"){
    saleSection = true;
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api.php", {
          params: {
            sort: filter,
            limit: 8,
          },
        });
        setProducts(response.data);
      } catch (error) {
        console.error(error);
        setProducts([]);
      }
    };

    fetchData();
  }, [filter]);

  const productsToShow = products.map((product) => (
    <ProductCard
      key={product.idproduct}
      productName={product.name}
      outofstock={false}
      productId={product.idproduct}
      productType={product.category}
      price={product.price}
      oldPrice={product.old_price}
      sale={true}
    />
  ));

  return (
    <section className="products-section products-featured full-block" id={id}>
      <div className="container">
        <div className="products-section_title">
          <h3>{sectionTitle}</h3>
          <p>{sectionPhrase}</p>
        </div>
        <div className="grid-container">{productsToShow}</div>
      </div>
    </section>
  );
}

export default ProductsSection;
