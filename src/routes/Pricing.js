import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PricingC from '../components/PricingC'
import HeroImage from '../components/HeroImage'


const Pricing = () => {
  return (
    <div>
        <Navbar />
        <HeroImage heading='PRICING.' text='Choose your trip'/>
        <PricingC />
        <Footer />
    </div>
  )
}

export default Pricing