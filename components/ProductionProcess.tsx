
import React from 'react';
import productionimage from './images/Production.png'
const ProductionProcess: React.FC = () => {
  const steps = [
    "Order Receiving", "Raw Material", "Testing for all raw material", 
    "Making of pumps & motor component", "Testing of all components", 
    "Pump & motor assembly", "Testing to IS Standard", "Visual Inspection", 
    "Packing", "Storage", "Dispatch"
  ];

  return (
    <section id="manufacturing" className="py-24 bg-white scroll-mt-navbar">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold tracking-widest uppercase mb-4 rounded">
            Manufacturing
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Production Process</h2>
          <p className="text-slate-600 text-lg max-w-4xl leading-relaxed">
            In Rainbow Pumps, manufacturing of quality pumps is based on team work philosophy that characterizes pump design & engineering. Material resources planning translates management goals & priorities into 4Ms (man, machine, material & method) requirements. This helps in shorter lead times and on-time delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-100 p-8 rounded-2xl">
            <h4 className="font-bold text-slate-900 mb-8 flex items-center gap-2">
              <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm">i</span>
              Process Workflow
            </h4>
            <div className="space-y-4">
              {steps.map((step, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 border-2 border-slate-300 rounded-full flex items-center justify-center font-bold text-slate-400 group-hover:border-green-600 group-hover:text-green-600 transition-colors">
                    {i + 1}
                  </div>
                  <div className="h-0.5 flex-1 bg-slate-200 group-hover:bg-green-200 transition-colors"></div>
                  <div className="font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">{step}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            <img src={productionimage} />
            <div className="col-span-2 p-6 bg-green-600 text-white rounded-xl">
              <p className="text-sm opacity-80 uppercase tracking-widest mb-2 font-bold">The 4M Philosophy</p>
              <h5 className="text-xl font-bold mb-2">Man, Machine, Material & Method</h5>
              <p>Ensuring shortest lead times and consistent on-time delivery for every client.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductionProcess;
