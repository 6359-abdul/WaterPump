
import React from 'react';
import Aimage from './images/A.png'
import Bimage from './images/B.png'
import Cimage from './images/C.png'
import Dimage from './images/D.png'
const Solutions: React.FC = () => {
  const solutions = [
    { title: 'Submersible Cables', desc: 'ISI certified flat cables in 1.5, 2.5, and 4.0 sq.mm sizes.' },
    { title: 'Panel Boards', desc: 'MCB, electronic relay, and dry run protection systems.' },
    { title: 'Self Priming Pumps', desc: 'Aluminum and cast iron body options, 0.5-1.0 HP.' },
    { title: 'Monoblock Pumps', desc: 'Centrifugal pumps for various head and discharge requirements.' }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Complete Pump Solutions</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Beyond our core submersible pump range, we offer comprehensive solutions including accessories and control systems.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((sol, i) => (
            <div key={i} className="p-8 bg-gray-50 rounded-2xl hover:bg-green-50 transition-colors group">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:bg-green-600 group-hover:text-white transition-all">
                <span className="font-bold">{i+1}</span>
              </div>
              <h4 className="text-xl font-bold mb-3 text-slate-900">{sol.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{sol.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-4">
           <img src={Aimage} alt="Cable" className="rounded-xl w-full h-80 object-cover" />
           <img src={Bimage} alt="Panel" className="rounded-xl w-full h-80 object-cover" />
           <img src={Cimage} alt="Self Priming" className="rounded-xl w-full h-80 object-cover" />
           <img src={Dimage} alt="Monoblock" className="rounded-xl w-full h-80 object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Solutions;
