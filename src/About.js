import React from 'react'
import HeroSection from './Components/HeroSection'

const About = () => {

  const data = {
    name: "Remax Ecommerce"
};

  return (
    <HeroSection myData={data} />
  )
}

export default About