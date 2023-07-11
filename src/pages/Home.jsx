import React from "react";
import HeroBanner from "../components/HeroBanner";
import DiscoverSection from "../components/DiscoverSection";
import ProductsSection from "../components/ProductsSection";

function Home(){
    return (
        <main className="full-block">
            <HeroBanner />
            <DiscoverSection />
            <ProductsSection sectionTitle="Recent Products" sectionPhrase="Our Favourites for You"/>
        </main>
    )
}

export default Home;