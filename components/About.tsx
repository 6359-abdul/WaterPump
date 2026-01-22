
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white scroll-mt-navbar">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold tracking-widest uppercase mb-4 rounded">
            About Us
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">Company Profile</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
            <p>
              Pacific Pumps & Motors is one of the leading manufacturers and
              suppliers of electrical, electronics, power tools and many other
              products in Wings Flow & Rainbow brands. We specialize in supply of
              variety of products especially Self Priming, Submersible Pump sets,
              Submersible Cables, Open wells, Mono Blocks, Panel Boards, and Fans.
            </p>
            <p>
              We are in the market since 1992, and we have more than 600 dealers
              in nearly 30 districts. Our team of employees are highly qualified &
              trained. Their efficiency and attention enables us to offer the best
              quality and most reliable products.
            </p>
          </div>
          <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
            <p>
              We have built a trustworthy reputation for premium quality products.
              We offer trouble free service, year after year. Our research and
              marketing department is a vital asset to our company. It is here that
              we introduce and incorporate innovative technology and products.
            </p>
            <p>
              Our products have excellent performance in market and are used in
              agriculture, industrial and domestic applications. At Pacific, our
              attention to quality is present in every stage of the manufacturing
              process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
