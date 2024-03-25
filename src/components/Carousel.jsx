import React, { useState } from "react";

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carousel-wrapper flex-row">
      <button
        onClick={prevImage}
        className="carousel-btn prev"
        aria-label="Previous Image"
      >
        &lt;
      </button>
      <img
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        className="profile-img"
      />
      <button
        onClick={nextImage}
        className="carousel-btn next"
        aria-label="Next Image"
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
