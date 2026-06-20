import React from 'react'
import Hero from '../home/Hero'
import About from '../home/About'
import Classes from '../home/Classes'
import WhyChoose from '../home/WhyChoose'
import Gallerysection from '../home/Gallerysection'
import TrainingProcess from '../home/TrainingProcess'
import Testimonials from './Testimonials'

const Home = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Classes/>
      <WhyChoose/>
      <Gallerysection/>
      <TrainingProcess/>
      <Testimonials/>
    </div>
  )
}

export default Home