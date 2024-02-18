import React from 'react';
// Assuming you have these additional imports for different image sizes
import heroImgDesktop from '../assets/desktop/image-hero.jpg';
import heroImgTablet from '../assets/tablet/image-hero.jpg';
import heroImgMobile from '../assets/mobile/image-hero.jpg';

function HeroMain() {
  return (
    <div className="hero-main">
      <div className="left">
        <div>
        <h1 className='h1hero'>
          Branding & 
        </h1>
        <h1 className='h1hero'>
          website design
        </h1>
        <h1 className='h1hero'>
          agency
        </h1>
        </div>
        <p className='p-hero'>
          We specialize in visual storytelling by creating cohesive brand and website design solutions for small businesses, giving lasting impressions to audiences in a digital world.
        </p>
        <button className="button-hero">Learn More</button>
      </div>
      <div className="right">
        <picture>
          <source media="(max-width: 599px)" srcSet={heroImgMobile} />
          <source media="(min-width: 600px) and (max-width: 1199px)" srcSet={heroImgTablet} />
          <img src={heroImgDesktop} alt="hero" className="hero-img" />
        </picture>
      </div>
    </div>
  );
}

export default HeroMain;
