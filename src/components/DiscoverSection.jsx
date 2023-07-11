import React from "react";
import "../styles/DiscoverSection.css"
import DiscoverCategory1 from "./DiscoverCategory1";

function DiscoverSection(){
    return (
        <section className="category full-block" id="discover-store">
            <div className="container">
                <div className="category-content">
                    <div className="category-content-left-side">
                        <div className="category-content-left-side-fashion">
                            <DiscoverCategory1 name="Clothes" link="/clothes"/>
                        </div>
                        <div className="category-content-left-side-best-sale big-category">
                            <DiscoverCategory1 name="Popular Items" link="#popular_items"/>
                         </div>
                    </div>
                    <div className="category-content-right-side">
                        <div className="category-content-right-side-accessories big-category">
                                <DiscoverCategory1 name="Recent releases" link="#recent_releases"/>
                        </div>
                        <div className="category-content-right-side-others">
                                <DiscoverCategory1 name="Accessories" link="/accessories"/>
                        </div>      
                    </div>
            </div>
        </div>
      </section>
    )
}

export default DiscoverSection;
