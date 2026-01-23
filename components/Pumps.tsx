import React from 'react';
import BigImage from './images/BigImage.png'
const Pumps = () => {
  return (
    <section id="pumps" className="w-full bg-slate-50">
      {/* Banner Section */}
      <div className="w-full bg-gradient-to-r from-blue-300 to-blue-300 flex items-center justify-center overflow-hidden">
        <div className="w-auto">
          <img src={BigImage} alt="Pumps Banner" className="w-full w-auto h-auto object-contain" />
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 py-20">

        {/* Featured Pumps Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-10 text-center">
            Featured Pumps
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Powerful Pump */}
            <div className="bg-white rounded-2xl shadow-lg border p-6 hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl text-blue-600 mb-2">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvC67-aItDxlylhda4j4MKfkBAgGKAxjJXVA&s" alt="" />
                  </div>
                </div>
              </div>
              <h4 className="font-bold text-slate-800 mb-4 text-lg">
                High Water Flow Technology Improves Pump Efficiency
              </h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-green-500 mr-2 mt-0.5">✓</span>
                  <span className="text-slate-600">High water flow technology</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2 mt-0.5">✓</span>
                  <span className="text-slate-600">Improved pump efficiency</span>
                </div>
              </div>
              <button className="mt-6 text-blue-600 font-semibold flex items-center hover:text-blue-800">
                Know More <span className="ml-2">→</span>
              </button>
            </div>

            {/* Versatile Pump */}
            <div className="bg-white rounded-2xl shadow-lg border p-6 hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-green-50 to-green-100 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl text-green-600 mb-2">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLVSxMWkqaoFpXh1MD03TAOGGzBXFiUTz3kg&s" alt="" />
                  </div>
                </div>
              </div>
              <h4 className="font-bold text-slate-800 mb-4 text-lg">
                Difference Between Centrifugal Pump and Reciprocating Pump Explained
              </h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-green-500 mr-2 mt-0.5">✓</span>
                  <span className="text-slate-600">Easy to use operation</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2 mt-0.5">✓</span>
                  <span className="text-slate-600">User-friendly design</span>
                </div>
              </div>
              <button className="mt-6 text-blue-600 font-semibold flex items-center hover:text-blue-800">
                Know More <span className="ml-2">→</span>
              </button>
            </div>

            {/* Agricultural Pump */}
            <div className="bg-white rounded-2xl shadow-lg border p-6 hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl text-amber-600 mb-2">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhOnZpZ9s_S6q-6FAs0M-hZJ5Vmz_8LhKmdQ&s" alt="Agricultural Pump" />
                  </div>
                </div>
              </div>
              <h4 className="font-bold text-slate-800 mb-4 text-lg">
                Tag 3 Agricultural Pumps for Better Farm Productivity
              </h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-green-500 mr-2 mt-0.5">✓</span>
                  <span className="text-slate-600">Agricultural-specific features</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2 mt-0.5">✓</span>
                  <span className="text-slate-600">Enhanced farm productivity</span>
                </div>
              </div>
              <button className="mt-6 text-blue-600 font-semibold flex items-center hover:text-blue-800">
                Know More <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Introduction Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            Pacific Pumps — Built for Strength, Efficiency, and Long Lasting Flow
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            From boosting water supply in homes and irrigating agricultural fields to powering demanding industrial processes, Pacific Pumps
            deliver reliable and versatile solutions. Engineered with state-of-the-art features—including energy‑efficient designs,
            durable construction, and advanced smart functionalities—Pacific Pumps elevate your pumping experience, ensuring
            unmatched efficiency and long‑lasting performance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Residential Pumps */}
            <div className="bg-white rounded-xl p-6 border shadow-sm">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Residential Pumps</h3>
              <p className="text-slate-600 mb-6">
                Residential pumps are the silent guardians of water pressure, offering versatility for homeowners.
                They provide drinking water, furnace gallons, fill pools, and support plumbing systems, ensuring dependable water supply for various domestic needs.
              </p>
              <button className="text-blue-600 font-semibold flex items-center hover:text-blue-800">
                View all products <span className="ml-2">→</span>
              </button>
            </div>

            {/* Agricultural Pumps */}
            <div className="bg-white rounded-xl p-6 border shadow-sm">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Agricultural Pumps</h3>
              <p className="text-slate-600 mb-6">
                In agriculture, water is paramount, and our agricultural pumps serve as the vital conduits.
                From farm water pumps to irrigation water pumps and boosters, they cater to specific needs,
                ensuring a consistent water supply that enriches crop growth and yields.
              </p>
              <button className="text-blue-600 font-semibold flex items-center hover:text-blue-800">
                View all products <span className="ml-2">→</span>
              </button>
            </div>
          </div>

          {/* Why Choose Pacific Pumps */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Why To Choose Pacific Pumps</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-600 font-bold">✓</span>
                </div>
                <h4 className="font-bold text-slate-800 mb-2">High Suction Capacity</h4>
                <p className="text-slate-600 text-sm">Optimal performance in various conditions</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-600 font-bold">⚡</span>
                </div>
                <h4 className="font-bold text-slate-800 mb-2">Wide Voltage Operation</h4>
                <p className="text-slate-600 text-sm">Compatible with diverse power sources</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-600 font-bold">🔧</span>
                </div>
                <h4 className="font-bold text-slate-800 mb-2">Easy Maintenance</h4>
                <p className="text-slate-600 text-sm">Minimal downtime with simple upkeep</p>
              </div>
            </div>
          </div>

          {/* Blog Section */}
          <div className="bg-gradient-to-r from-slate-50 to-white rounded-2xl p-8 border">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">PacificPumps Blog</h3>
            <p className="text-slate-600 mb-6">
              Read our informative blog covering a wide range of topics related to all your pumping needs.
              Uncover expert tips, industry trends, and application know-how that will elevate your understanding of pumping solutions.
            </p>
            <button className="text-blue-600 font-semibold flex items-center hover:text-blue-800">
              Read More <span className="ml-2">→</span>
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">Pumps FAQ</h2>
          <div className="bg-white rounded-2xl shadow-lg border overflow-hidden">
            {[
              "How do energy-efficient residential pumps contribute to cost savings?",
              "What are the advantages of Multistage Pumps?",
              "Can I register the warranty of the product on the website?",
              "Where do I contact in case of product queries and questions?",
              "How do I choose the right pump for my application?",
              "Are spare parts readily available for common pumps?",
              "Do common Pumps require professional installation?"
            ].map((question, index) => (
              <div key={index} className="border-b last:border-b-0">
                <button className="w-full p-6 text-left flex justify-between items-center hover:bg-slate-50">
                  <span className="font-medium text-slate-800">{question}</span>
                  <span className="text-2xl text-slate-400">+</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Modern Water Pumps Section */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-10 text-white">
          <h2 className="text-3xl font-bold mb-6">Modern Water Pumps for Diverse Applications</h2>
          <p className="text-lg mb-8 text-slate-200">
            Whether at home, on a farm, in a factory, or in a commercial building, there is no sizeable difference in
            energy use if a reliable and efficient water supply is available. A good water pump is not merely a machine;
            it is an important part of keeping a smooth and continuous operation. Common options include centrifugal pumps
            that are designed for performance, energy efficiency, and long-lasting use.
          </p>
          <p className="text-lg mb-8 text-slate-200">
            Whether you need an agricultural water pump for irrigation or residential pumps for daily water needs,
            there is an option for almost every requirement. Additionally, with transparent water pump price listings online,
            choosing the top-rated water pumps in India can be simple and informed.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-slate-800 font-semibold px-6 py-3 rounded-lg hover:bg-slate-100 transition">
              Explore All Pumps
            </button>
            <a href="#contact" className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition inline-block">
              Contact Sales
            </a>
          </div>
        </div>

        {/* Categories Grid (Matching your original design) */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">
            Pumps
          </h2>
          <p className="text-slate-500 mb-10">
            High-performance agricultural and industrial pump solutions
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <PumpCard title="Centrifugal Pumps" />
            <PumpCard title="Monoblock Pumps" />
            <PumpCard title="Submersible Pumps" />
            <PumpCard title="Openwell Pumps" />
          </div>
        </div>

      </div>
    </section>
  );
};

const PumpCard = ({ title }: { title: string }) => (
  <div className="bg-white rounded-2xl shadow-sm border hover:shadow-md transition p-6 cursor-pointer">
    <div className="h-32 bg-gradient-to-br from-blue-50 to-blue-100 rounded mb-4 flex items-center justify-center">
      <div className="text-4xl">💧</div>
    </div>
    <h3 className="font-semibold text-slate-800 text-lg">{title}</h3>
    <p className="text-sm text-slate-500 mt-2">
      Reliable pumps built for durability and performance.
    </p>
    <button className="mt-4 text-blue-600 font-medium text-sm flex items-center hover:text-blue-800">
      Read More <span className="ml-2">→</span>
    </button>
  </div>
);

export default Pumps;