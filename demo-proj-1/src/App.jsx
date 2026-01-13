import React from 'react';
import Hero from './components/Hero';
import Service from './components/Services';
import WhereToBuy from './components/WhereToBuy';
import AppBanner from './components/AppBanner';
import Footer from './components/Footer';


function App() {
  return (
    <div className="overflow-x-hidden"> 
      <Hero/>
      <Service />
      <WhereToBuy />
      <AppBanner />
      <Footer />
    </div>
  
  );
}

export default App;

