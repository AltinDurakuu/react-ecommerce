import React from "react";
import ProductCard from "./ProductCard";
import "./../styles/ProductsSection.css"

function ProductsSection({sectionTitle, sectionPhrase, arrayOfProducts}){
    const products = arrayOfProducts.map((product) => {
        return <ProductCard key={product.idproduct} productName={product.name} outofstock={false} productId={product.idproduct} productType={product.category} price={product.price} oldPrice={product.old_price} sale={true}/>
      })
    return (
        <section className="products-section products-featured full-block">
            <div className="container">
                <div className="products-section_title">
                    <h3>{sectionTitle}</h3>
                    <p>{sectionPhrase}</p>
                </div>
                <div className="grid-container">
                    {products}
                </div>
            </div>
        </section>
    )
}

export default ProductsSection;