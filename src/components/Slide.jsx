import React, { useState } from 'react';
import slider1 from '../assets/desktop/image-slide-1.jpg';
import slider2 from '../assets/desktop/image-slide-2.jpg';
import slider3 from '../assets/desktop/image-slide-3.jpg';
import next from '../assets/desktop/icon-arrow-next.svg';
import prev from '../assets/desktop/icon-arrow-previous.svg';
import whitewave from '../assets/desktop/bg-pattern-wavy-white.svg';

const slidesData = [
  {
    id: 1,
    header: 'Brand naming & guidlines',
    imageUrl: slider1,
  },
  {
    id: 2,
    header: 'Brand naming & guidlines',
    imageUrl: slider2,
  },
  {
    id: 3,
    header: 'Brand naming & guidlines',
    imageUrl: slider3,
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? slidesData.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="slider">
      <div className="slide" key={slidesData[currentSlide].id}>
        <div className="card">
          <div className="card-container">
          <h1>{slidesData[currentSlide].header}</h1>
         <div className="buttons">
            <button className="btn-slide" onClick={goToPrevious}><img src={prev} alt="prev btn"/></button>
            <button className="btn-slide" onClick={goToNext}><img src={next} alt="next btn"/></button>
          </div>
          </div>
        </div>
        <div className="slider-img-container">
        <img src={slidesData[currentSlide].imageUrl} alt="Slide" />
        </div>
        <img src={whitewave} alt="white wave" className="white-wave"/>
      </div>
      

       
    </div>
  );
};

export default Slider;
