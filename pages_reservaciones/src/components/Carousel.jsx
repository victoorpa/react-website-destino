import React, { useState, useRef, useEffect } from 'react';
import ica from '../../public/imagens/ica2.webp';
import trujillo from '../../public/imagens/trujillo.jpg';
import tarapoto2 from '../../public/imagens/tarapoto2.jpg';
import arequipa from '../../public/imagens/arequipa.jpg';
import cajamarca from '../../public/imagens/cajamarca.jpg';
import machupichu from '../../public/imagens/machupichu.jpg';
import paracas from '../../public/imagens/Tour paracas.jpg';
import puno from '../../public/imagens/puno.png';
import mancora from '../../public/imagens/mancora.jpg';
import arequipa2 from '../../public/imagens/arequipa2.jpg';
import ayacucho from '../../public/imagens/ayacucho.jpg';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef(null);
  const slideWidth = 100; 

  const slides = [
    { src: ica, alt: 'Imagen de Ica', price: 'S/.150.00 para 1 persona' },
    { src: trujillo, alt: 'Imagen de Trujillo', price: 'S/320.00 para 2 personas' },
    { src: tarapoto2, alt: 'Imagen de Tarapoto', price: 'S/.160.00 para 1 persona' },
    { src: arequipa, alt: 'Imagen de Arequipa', price: 'S/.500.00 para 4 personas' },
    { src: cajamarca, alt: 'Imagen de Cajamarca', price: 'S/.80.00' },
    { src: machupichu, alt: 'Imagen de Machu Picchu', price: 'S/.100.00' },
    { src: paracas, alt: 'Imagen de Paracas', price: 'S/.170.00' },
    { src: puno, alt: 'Imagen de Puno', price: 'S/.100.00' },
    { src: mancora, alt: 'Imagen de Mancora', price: 'S/.800.00' },
    { src: arequipa2, alt: 'Imagen de Arequipa2', price: 'S/.100.00' },
    { src: ayacucho, alt: 'Imagen de Ayacucho', price: 'S/.400.00' },
  ];

  useEffect(() => {
    const track = trackRef.current;
    const offset = -currentIndex * slideWidth;
    track.style.transform = `translateX(${offset}px)`;
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="carousel">
      <h2>¡ESCOGE TU DESTINO TURÍSTICO!</h2>
      <div className="carrusel-list">
        <button className="carrusel-arrow carrusel-prev" onClick={handlePrev}>
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left"
               className="svg-inline--fa fa-chevron-left fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 320 512">
            <path fill="currentColor"
                  d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"/>
          </svg>
        </button>

        <div className="carrusel-track" ref={trackRef}>
          {slides.map((slide, index) => (
            <div className="carrusel" key={index}>
              <div>
                <a href="file:///C:/Proyecto%20D.E.W/Avance%20proyecto/Destinos/destinos.html">
                  <h4> <small>Paquete desde</small> {slide.price}</h4>
                  <picture>
                    <img src={slide.src} alt={slide.alt} />
                  </picture>
                </a>
              </div>
            </div>
          ))}
        </div>

        <button className="carrusel-arrow carrusel-next" onClick={handleNext}>
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right"
               className="svg-inline--fa fa-chevron-right fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 320 512">
            <path fill="currentColor"
                  d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
