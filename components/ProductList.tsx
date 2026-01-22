import React from 'react';
import p1images from './images/p1.png'
import p2images from './images/p2.png'
import OWimages from './images/OW.png'

const ProductList: React.FC = () => {
  return (
    <div id="products" className="scroll-mt-navbar">
      {/* V-3 & V-4 Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold tracking-widest uppercase mb-4 rounded">
              Submersible Pumps
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">V-3 & V-4 Series</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
             <div className="space-y-10">
                <div>
                   <h4 className="text-2xl font-bold mb-4 text-green-600">Technical Specifications</h4>
                   <div className="space-y-4">
                      <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-green-600">
                         <span className="font-bold block text-slate-900 mb-1">V-3 Series</span>
                         <p className="text-slate-600">0.5-1.5 HP, 10-35 stages, single phase, head range 10-130 meters, discharge 15-85 LPM</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-slate-900">
                         <span className="font-bold block text-slate-900 mb-1">V-4 Series</span>
                         <p className="text-slate-600">0.5-5.0 HP, 7-35 stages, single & three phase, head range 10-215 meters, discharge 15-380 LPM</p>
                      </div>
                   </div>
                </div>

                <div>
                   <h4 className="text-2xl font-bold mb-4 text-green-600">Premium Materials</h4>
                   <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {['Motor & Pump body: S.S. 304 Grade', 'Rotor: Silicon Stamping & EC Grade Copper', 'Bowl: Noryl with S.S. Ring', 'Shaft: S.S. 410 & 431 Grade'].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-700">
                           <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                           {item}
                        </li>
                      ))}
                   </ul>
                </div>
             </div>
             
             <div className="grid grid-cols-2 gap-6">
                <img src={p1images} alt="V-3 Pump" className="rounded-2xl shadow-xl w-full h-100 object-cover" />
                <div className="space-y-6">  
                   <img src={p2images} alt="Pump Component 1" className="rounded-2xl shadow-lg w-full h-100 object-cover" />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* V-6 Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">V-6 Submersible Pumps</h2>
            <p className="text-slate-600 text-lg">
              Our V-6 series represents the pinnacle of submersible pump technology, offering powerful performance for demanding applications. Available in K-Type (50 feet head) and Q-Type configurations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-green-50 text-green-700 rounded-full flex items-center justify-center mb-6 font-bold text-2xl italic">K</div>
                <h4 className="text-xl font-bold mb-4">K-Type Series</h4>
                <p className="text-slate-600 mb-4">3.0-10 HP, 2-16 stages, three phase, head range 10-230 meters, discharge 80-800 LPM.</p>
                <div className="text-sm font-bold text-green-700 bg-green-50 inline-block px-3 py-1 rounded">Radial flow design - 50ft Head</div>
             </div>

             <div className="bg-slate-900 p-8 rounded-2xl shadow-sm text-white md:scale-105 relative z-10">
                <div className="w-16 h-16 bg-white/10 text-white rounded-full flex items-center justify-center mb-6 font-bold text-2xl italic">P</div>
                <h4 className="text-xl font-bold mb-4">Premium Construction</h4>
                <ul className="space-y-3 text-slate-300">
                   <li>• S.S. 304 motor body</li>
                   <li>• C.I. bowl with S.S. 410 impeller</li>
                   <li>• Gunmetal bushings</li>
                   <li>• Advanced thrust bearing system</li>
                </ul>
             </div>

             <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-green-50 text-green-700 rounded-full flex items-center justify-center mb-6 font-bold text-2xl italic">Q</div>
                <h4 className="text-xl font-bold mb-4">Q-Type Series</h4>
                <p className="text-slate-600 mb-4">3.0-10 HP, 2-10 stages, three phase, head range 10-95 meters, discharge 140-790 LPM.</p>
                <div className="text-sm font-bold text-green-700 bg-green-50 inline-block px-3 py-1 rounded">High-volume optimization</div>
             </div>
          </div>
        </div>
      </section>

      {/* Openwell Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="order-2 lg:order-1">
                <img src={OWimages} alt="Openwell Pumps" className="rounded-2xl shadow-2xl" />
             </div>
             <div className="order-1 lg:order-2">
                <span className="text-green-400 font-bold uppercase tracking-widest text-sm mb-4 block">Openwell Solutions</span>
                <h2 className="text-4xl font-bold mb-8">V-7 & V-9 Openwell Pumps</h2>
                
                <div className="space-y-8">
                   <div>
                      <h4 className="text-xl font-bold mb-2">V-7 Series (Single Phase)</h4>
                      <p className="text-slate-400">0.5-1.5 HP, head range 6-26 meters, discharge 50-350 LPM. Compact design perfect for residential and small-scale applications.</p>
                   </div>
                   <div>
                      <h4 className="text-xl font-bold mb-2">V-9 Series (Three Phase)</h4>
                      <p className="text-slate-400">3.0-7.5 HP horizontal configuration, 2-3 inch outlet, head range 10-38 meters, discharge 230-1500 LPM.</p>
                   </div>
                   <div className="pt-6 border-t border-white/10">
                      <h4 className="text-sm font-bold uppercase text-green-400 mb-4">Superior Materials</h4>
                      <div className="grid grid-cols-2 gap-4 text-slate-300">
                         <span>• S.S. 304 Grade Body</span>
                         <span>• EC Grade Winding Wire</span>
                         <span>• S.S. & C.I. Impellers</span>
                         <span>• Gunmetal LT-B4 Bushings</span>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductList;
