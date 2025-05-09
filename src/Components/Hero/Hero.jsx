import React from 'react';
import './Hero.css';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import profile from '../../assets/mulwa1.png';
import resume from '../../assets/Dennis Muuo-a-cv.pdf'; 

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile} alt="Profile" />
      <h1><span>I'm Dennis Muuo,</span> A Junior Fullstack developer based in Nairobi.</h1>
      <p>A tech enthusiast with a deep passion for innovation, I’m driven by curiosity and a commitment to mastering full-stack development to create impactful digital experiences.</p>
      <div className="hero-action">
        <div className="hero-connect"> <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <a href={resume} target="_blank" rel="noopener noreferrer" className="hero-resume">
          View My CV
        </a>
      </div>
    </div>
  );
};

export default Hero;
