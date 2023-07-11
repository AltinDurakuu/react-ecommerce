import React from "react";
import ProductCard from "./ProductCard";
import "./../styles/ProductsSection.css"

function ProductsSection({sectionTitle, sectionPhrase}){
    return (
        <section className="products-section products-featured full-block">
            <div className="container">
                <div class="products-section_title">
                    <h3>{sectionTitle}</h3>
                    <p>{sectionPhrase}</p>
                </div>
                <div className="grid-container">
                    <ProductCard name="MINI FLIPLOCK WALLET" outofstock={false} productName="product11" productType="Bags & Satchels" price="125" oldPrice="175" sale={true}/>
                </div>
            </div>
        </section>
    )
}

export default ProductsSection;