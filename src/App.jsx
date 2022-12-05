import React from 'react';
import style from "./style.js";
import {
  Navbar,
  Billing,
  CardDeal,
  Business,
  Clients,
  CTA,
  Stats,
  Footer,
  Testimonials,
  Hero,
} from "./components/combineAllComponents.js"
import './App.css';

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className=''>
        <div className=''>
          <Navbar />
        </div>
      </div>

      <div className=''>
        <div className=''>
          <Hero />
        </div>
      </div>

      <div className=''>
        <div className=''>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  )
}
export default App;
