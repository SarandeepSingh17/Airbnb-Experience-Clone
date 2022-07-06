import React from 'react';
import GridImage from "../images/grid-image.png"
const Hero =()=>
{
  return(
    <section className='hero'>

      <img src={GridImage} className="hero--photo" alt='grid'/>
      <h1 className='hero--header'>Online Experiences</h1>
      <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
    </section>
  )
};
export default Hero;