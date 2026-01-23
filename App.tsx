
import React from 'react';
import Navigation from './components/Navigation.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Stats from './components/Stats.tsx';
import MissionVision from './components/MissionVision.tsx';
import ProductionProcess from './components/ProductionProcess.tsx';
import Certifications from './components/Certifications.tsx';
import ProductList from './components/ProductList.tsx';
import Solutions from './components/Solutions.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import Pumps from './components/Pumps.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Navigation />
      <main>
        <Pumps />
        <Hero />
        <About />
        <Stats />
        <MissionVision />
        <ProductionProcess />
        <Certifications />
        <ProductList />
        <Solutions />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
