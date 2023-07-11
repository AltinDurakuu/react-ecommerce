import React from "react";
import HeroBanner from "../components/HeroBanner";
import DiscoverSection from "../components/DiscoverSection";

function Home(){
    return (
        <main className="full-block">
            <HeroBanner />
            <DiscoverSection />
        </main>
    )
}

export default Home;