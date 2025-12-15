import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import Pricing from './components/Pricing.jsx'
import Testimonials from './components/Testimonials.jsx'
import Footer from './components/Footer.jsx'


function App() {
 

  return (
    <>
      <div className="min-h-screen bg-slate-950 overflow-hidden text-white">
        <Navbar/>
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </>
  )
}

export default App
