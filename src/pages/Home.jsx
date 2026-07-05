import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Products from '../components/Products';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Contact />
      
      <Footer />
      
      
    </>
  );
};

export default Home;