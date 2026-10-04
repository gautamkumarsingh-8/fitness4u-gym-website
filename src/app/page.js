import React from 'react';
import Gallery from './components/home-components/Gallery';
import Services from './components/home-components/Services';
import About from './components/home-components/About';
import Contact from './components/home-components/Contact';
function page() {
  return (
    <div>
      <Services />
      <Gallery />
      <About />
      <Contact />
    </div>
  )
}

export default page