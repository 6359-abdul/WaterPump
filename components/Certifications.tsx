
import React from 'react';

const Certifications: React.FC = () => {
  const certifications = [
    { title: 'ISO 9001 Certified', desc: 'International quality management standards compliance' },
    { title: 'IS Standards', desc: 'IS 8034 and IS 14220 certified products' },
    { title: 'Energy Efficient', desc: 'BEE certified for energy conservation' }
  ];

  return (
    <section id="quality" className="py-24 bg-slate-900 text-white scroll-mt-navbar">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-16">
          <span className="inline-block px-3 py-1 bg-white/10 text-white text-xs font-bold tracking-widest uppercase mb-4 rounded border border-white/20">
            Certifications
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Quality Assurance & Standards</h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Our commitment to excellence is demonstrated through our comprehensive certifications and adherence to international quality standards. We maintain rigorous testing protocols at every stage of production to ensure world-class quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, i) => (
            <div key={i} className="p-8 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors group">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-6 font-bold text-xl">
                {i + 1}
              </div>
              <h4 className="text-xl font-bold mb-3">{cert.title}</h4>
              <p className="text-slate-400 leading-relaxed">{cert.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-12 opacity-60">
           {/* Placeholder for Logos */}
           <div className="text-2xl font-bold border-2 p-2 border-white/20 rounded">ISO 9001</div>
           <div className="text-2xl font-bold border-2 p-2 border-white/20 rounded">BEE</div>
           <div className="text-2xl font-bold border-2 p-2 border-white/20 rounded">ISI:8034</div>
           <div className="text-2xl font-bold border-2 p-2 border-white/20 rounded">ISI:14220</div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
