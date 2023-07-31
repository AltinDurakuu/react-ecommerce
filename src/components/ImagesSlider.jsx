import React, { useState } from "react";
import "../styles/ImageSlider.css"; 

function ImageSlider({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
    console.log(currentSlide)
  };

  const handleNextClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className="image-slider">
      <div className="products-photos-grid">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product ${index}`}
            className={index === currentSlide ? "active" : ""}
          />
        ))}
      </div>
      <button className="arrow prev" onClick={handlePrevClick}>
        &lt;
      </button>
      <button className="arrow next" onClick={handleNextClick}>
        &gt;
      </button>
    </div>
  );
}

export default ImageSlider;
