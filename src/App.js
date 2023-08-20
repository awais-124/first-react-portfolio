/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import './index.css';

/* CHILD COMPONENTS IMPORTS */
import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';
import Nav from './Components/nav/Nav';
import About from './Components/about/About';
import Experience from './Components/experience/Experience';
import Portfolio from './Components/portfolio/Portfolio';
import Testimonial from './Components/testimonial/Testimonial';
import Contact from './Components/contact/Contact';
import Services from './Components/Services/Services';
/*************************************/

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </React.Fragment>
  );
};

export default App;
