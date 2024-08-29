import React, { useState, useEffect, useRef } from 'react';
import './Gallery.css';

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselImagesRef = useRef(null);
  const images = [
    "img/Imagem 1.jpg",
    "img/Imagem 2.jpg",
    "img/Imagem 3.jpg",
    "img/Imagem 4.jpg"
  ];

  const updateCarousel = () => {
    const width = carouselImagesRef.current.clientWidth;
    carouselImagesRef.current.style.transform = `translateX(-${width * currentIndex}px)`;
  };

  useEffect(() => {
    updateCarousel();
    window.addEventListener('resize', updateCarousel);
    return () => window.removeEventListener('resize', updateCarousel);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  return (
    <section id="galeria">
      <h2>Galeria</h2>
      <div className="carousel">
        <button className="prev" onClick={handlePrev}>&#10094;</button>
        <div className="carousel-images" ref={carouselImagesRef}>
          {images.map((src, index) => (
            <img key={index} src={src} alt={`Imagem ${index + 1}`} className={currentIndex === index ? "active" : ""} />
          ))}
        </div>
        <button className="next" onClick={handleNext}>&#10095;</button>
      </div>
    </section>
  );
}

export default Gallery;
