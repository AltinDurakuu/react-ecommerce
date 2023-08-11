import React, { useState, useEffect } from "react";
import GetProductsForm from "./GetProductsForm";
import axios from "./axios";
import ProductCard from "./ProductCard";

function ClothesAccessoriesPage({type}) {
  const [formValues, setFormValues] = useState({
    search: "",
    category: "",
    price: 1000,
  });
  const [products, setProducts] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const resetOnClick = () =>{
    setFormValues({
      search: "",
      category: "",
      price: 1000,
    })
    fetchData();
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get("/api.php", {
        params: {
          type: type,
          category: formValues.category,
          price: formValues.price,
          name: formValues.search,
        },
      });
      setProducts(response.data);
    } catch (error) {
      console.error(error);
      setProducts([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("/api.php", {
        params: {
          type: type
        },
      });
      setProducts(response.data);
    } catch (error) {
      console.error(error);
      setProducts([]);
    }
  };
  let productsToRender = products.map(product => {
    return (<ProductCard
              key={product.idproduct}
              productName={product.name}
              outofstock={false}
              productId={product.idproduct}
              productType={product.category}
              price={product.price}
              oldPrice={product.old_price}
            />)
  })
  return (
    <div>
      <GetProductsForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        category={formValues.category}
        price={formValues.price}
        search={formValues.search}
        resetOnClick={resetOnClick}
      />
        <section className="products-section products-accessories full-block" id="on-sale">
          <div className="container">
            <h2  className="pageTitle">{type === "clothes" ? "Clothes" : "Accessories"}</h2>
            <div className="grid-container a" id="clothes_grid">
              {productsToRender}
            </div>
          </div>
      </section>
    </div>
  );
}

export default ClothesAccessoriesPage;