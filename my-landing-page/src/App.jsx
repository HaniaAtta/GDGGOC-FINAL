import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Feautures from './components/Feautures';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <Feautures />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default App;