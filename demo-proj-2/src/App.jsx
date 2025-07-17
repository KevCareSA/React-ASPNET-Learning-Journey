import React  from 'react'
import './index.css'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Portfolio from './sections/Portfolio'
import { Work } from './sections/Work'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import About from './sections/About'
import Service from './sections/Service'
import Testimonials from './sections/Testimonials'



function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Service />
      <Portfolio />
      <Work />
      <Testimonials />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
