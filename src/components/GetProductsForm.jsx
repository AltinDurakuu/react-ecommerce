import React, { useState } from "react";
import "./../styles/GetProductsForm.css";

function GetProductsForm({handleChange, handleSubmit, search, category, price, resetOnClick}) {

  return (
    <section className="clothes-accessories full-block">
      <div className="container clothes-accessories-content">
        <form className="clothes-accessories-form" onSubmit={handleSubmit}>
          <div className="clothes-accessories-group">
            <label htmlFor="search">Search Product:</label>
            <input
              id="search"
              type="text"
              placeholder="Search"
              name="search"
              value={search}
              onChange={handleChange}
            />
          </div>
          <div className="clothes-accessories-group">
            <label htmlFor="category">Category:</label>
            <label>
              <input
                type="radio"
                name="category"
                value="men"
                checked={category === "men"}
                onChange={handleChange}
              />{" "}
              Men
            </label>
            <label>
              <input
                type="radio"
                name="category"
                value="women"
                checked={category === "women"}
                onChange={handleChange}
              />{" "}
              Women
            </label>
            <label>
              <input
                type="radio"
                name="category"
                value="kids"
                checked={category === "kids"}
                onChange={handleChange}
              />{" "}
              Kids
            </label>
          </div>
          <div className="clothes-accessories-group">
            <label htmlFor="price">Sort by price</label>
            <input
              type="range"
              id="price"
              name="price"
              min="10"
              max="1000"
              step="10"
              value={price}
              onChange={handleChange}
            />
            <span id="priceValue">&lt;{price}</span>
          </div>
          <input
            type="reset"
            className="getProductsBtns"
            onClick={resetOnClick}
          />
          <button className="btn btn--form getProductsBtns"   type="submit" value="Search">
            Search
          </button>
        </form>
      </div>
    </section>
  );
}

export default GetProductsForm;
