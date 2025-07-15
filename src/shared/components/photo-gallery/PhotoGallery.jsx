import React, { useState } from "react";
import "./PhotoGallery.scss";
import LazyImage from "../lazy-image/LazyImage";

const PhotoGallery = ({ images, title, className = "" }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  const handleImageSelect = (index) => {
    setSelectedImage(index);
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className={`photo-gallery ${className}`}>
      <div className="photo-gallery__thumbnails">
        {images.map((image, index) => (
          <button
            key={index}
            className={`photo-gallery__thumbnail ${
              selectedImage === index ? "photo-gallery__thumbnail--active" : ""
            }`}
            onClick={() => handleImageSelect(index)}
            aria-label={`Ver ${image.label} de ${title}`}
          >
            <LazyImage
              src={image.src}
              alt={`${title} - ${image.label}`}
              className="photo-gallery__thumbnail-image"
            />
          </button>
        ))}
      </div>
      
      <div className="photo-gallery__main">
        <LazyImage
          src={images[selectedImage].src}
          alt={`${title} - ${images[selectedImage].label}`}
          className="photo-gallery__main-image"
        />
      </div>
    </div>
  );
};

export default PhotoGallery; 