import React from 'react';
import Hero from './components/Hero';
import Service from './components/Services';
import WhereToBuy from './components/WhereToBuy';


function App() {
  return (
    <div className="overflow-x-hidden"> 
      <Hero/>
      <Service />
      <WhereToBuy />
    </div>
  
  );
}

export default App;

