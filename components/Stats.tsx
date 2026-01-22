
import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { value: '1992', label: 'Established', desc: 'Over 30 years of industry experience' },
    { value: '600+', label: 'Dealers', desc: 'Across nearly 30 districts' },
    { value: '365', label: 'Day Guarantee', desc: 'Complete product warranty' },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="group">
              <div className="text-5xl lg:text-6xl font-serif font-bold mb-3 text-green-400 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-xl font-bold mb-2 uppercase tracking-wide">{stat.label}</div>
              <div className="text-slate-400 max-w-xs mx-auto">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
