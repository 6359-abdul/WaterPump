
import React from 'react';
import logo from './images/logo.png'
const Navigation: React.FC = () => {
  const navLinks = [
    { name: 'PUMPS', href: '#pumps' },
    { name: 'ABOUT', href: '#about' },
    { name: 'PRODUCTS', href: '#products' },
    { name: 'QUALITY', href: '#quality' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 h-20 flex items-center shadow-sm">
      <div className="container mx-auto px-6 flex items-center justify-between gap-4">

        {/* Left: Logo Section */}
        <div className="flex items-center gap-3 min-w-[200px]">
          <div className="bg-[#16a34a] text-white w-20 h-20 flex items-center justify-center font-bold text-xl rounded">
            <img src={logo} alt="Logo" className="w-20 h-20" />
          </div>
          <div>
            <div className="font-serif font-bold text-xl text-[#16a34a] leading-none">
              Pacific Pumps
            </div>
            <div className="text-[10px] text-slate-400 font-sans uppercase tracking-tight mt-1">
              Wings Flow & Rainbow
            </div>
          </div>
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] font-bold uppercase tracking-widest text-[#16a34a] hover:text-green-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right: Copyright Section */}
      </div>
    </nav>
  );
};

export default Navigation;
