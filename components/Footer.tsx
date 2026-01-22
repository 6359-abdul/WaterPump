
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
          <div className="text-slate-400 text-sm text-center">
             © {new Date().getFullYear()} Pacific Pumps & Motors. All Rights Reserved.
          </div>
      </div>
    </footer>
  );
};

export default Footer;
