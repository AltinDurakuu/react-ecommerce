import React from "react";
import "../styles/DiscoverSection.css"

function DiscoverSection(){
    return (
        <section className="category full-block" id="discover-store">
        <div className="container">
          <div className="category-content">
            <div className="category-content-left-side">
              <div className="category-content-left-side-fashion">
                <div className="category-description">
                  <div className="category-description_content">
                    <h2>Clothes</h2>
                    <span>Best trending 2023</span><br/>
                    <a href="/clothes">Discover Store</a>
                  </div>
                </div>
              </div>
              <div className="category-content-left-side-best-sale big-category">
                <div className="category-description">
                  <div className="category-description_content">
                    <h2>Popular items</h2>
                    <span>Best trending 2023</span><br/>
                    <a href="#popular_items">Discover Store</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="category-content-right-side">
              <div className="category-content-right-side-accessories big-category">
                <div className="category-description">
                  <div className="category-description_content">
                    <h2>Recent releases</h2>
                    <span>Best trending 2023</span><br/>
                    <a href="#recent_releases">Discover</a>
                  </div>
                </div>
              </div>
              <div className="category-content-right-side-others">
                <div className="category-description">
                  <div className="category-description_content">
                    <h2>Accessories</h2>
                    <span>Best trending 2023</span><br/>
                    <a href="accessories">Discover Store</a>
                  </div>
                </div>
              </div>      
            </div>
          </div>
        </div>
      </section>
    )
}

export default DiscoverSection;
