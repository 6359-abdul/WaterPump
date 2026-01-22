import React from 'react';
import heroImage from './images/Hero.png'
const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-white overflow-hidden py-12">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center relative z-10">
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6">
            Most Powerful and Efficient Pumps with <span className="text-[#16a34a]">World Class Quality</span>
          </h1>
          <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed">
            Pacific Pumps & Motors delivers cutting-edge submersible pump solutions under the
            Wings Flow and Rainbow brands, combining innovation with reliability for
            agricultural, industrial, and domestic applications.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#products" 
              className="px-8 py-4 bg-[#16a34a] text-white font-bold rounded hover:bg-green-700 transition-colors"
            >
              Explore Products
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 border-2 border-slate-900 text-slate-900 font-bold rounded hover:bg-slate-900 hover:text-white transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 relative">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={heroImage}
              alt="Industrial Water Management" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-green-900/10 mix-blend-multiply"></div>
          </div>
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-green-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-emerald-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
