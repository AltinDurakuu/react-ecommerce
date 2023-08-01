import React from "react";
import "../styles/HeroBanner.css"


function HeroBanner(){
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };
    return (
        <section>
            <div className="hero-banner-container full-block">
                <div className="hero-banner full-block">
                    <div className="container">
                        <div className="hero-banner-left-side">
                            <div className="hero-banner-left-side_content">
                                <h1>Mid Season Sale</h1>
                                <p>For Woman Who Like To Follow Trends But Have A <br /> Strong Sense Of Individual Style</p>
                                <div className="hero-banner-left-side_content-btns">
                                    <a onClick={() => scrollToSection('discover-store')}>Discover store</a>
                                    <a onClick={() => scrollToSection('on-sale')}>Special Offers</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroBanner;