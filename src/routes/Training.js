import React from 'react'
import Navbar from '../components/Navbar'
import HeroImage from '../components/HeroImage'
import Footer from '../components/Footer'
import TrainingC from '../components/TrainingC'

const Training = () => {
  return (
    <div>
        <Navbar />
        <HeroImage heading='TRAINING' text='Pre-Flight & In-Flight Training'/>
        <TrainingC />
        <Footer />
    </div>
  )
}

export default Training