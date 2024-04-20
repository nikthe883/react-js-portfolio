import React from 'react'
import { useState } from 'react'

import ParticleBackground from './components/particlesBackground'

import Header  from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experiance/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Certificates from './components/certificates/Certificates'
import Contact from './components/contact/Contact'
import Footer from './components/footer/footer'


const App = () => {

  const [showParticles, setShowParticles] = useState(false);
  const handleToggleParticles = () => {
    setShowParticles(!showParticles);
  }
  

  return (
    <>

      <Header showParticles={showParticles}
      handleToggleParticles ={handleToggleParticles}/>
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Certificates />
      <Contact />
      <Footer />
      {showParticles && <ParticleBackground />}

    </>
  )
}

export default App