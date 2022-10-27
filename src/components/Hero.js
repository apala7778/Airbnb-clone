import React from 'react'
import grid from '../images/group.png'

const Hero = () => {
  return (
    <div>
     <section className='hero'>
        <img src={grid} className="hero--image" alt="photo" />
        <h1 className='hero--header'>Online Experiences </h1>
         <p className='hero--text'>Join unique interactives activities led by
         one-of-a-kind hosts-all without leaving home.
         </p>
     </section>
    </div>
  )
}

export default Hero