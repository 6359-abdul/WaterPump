
import React from 'react';

const MissionVision: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 bg-white p-12 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-3xl font-bold text-slate-900 mb-6">Mission</h3>
            <p className="text-xl text-slate-600 leading-relaxed italic">
              "To achieve technological & operational excellence through innovation, service & consistency."
            </p>
          </div>
          <div className="flex-1 bg-slate-900 p-12 rounded-2xl shadow-sm text-white hover:bg-slate-800 transition-colors duration-300">
            <h3 className="text-3xl font-bold mb-6">Vision</h3>
            <p className="text-xl text-slate-300 leading-relaxed italic">
              "To be one of the leading company in the market providing all products under one roof with world class quality, service & economy."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
