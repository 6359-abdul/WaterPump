import React, { useState } from 'react';
import logo from './images/logo.png';
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

const Navigation: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'PUMPS', href: '#pumps' },
    { name: 'ABOUT', href: '#about' },
    { name: 'PRODUCTS', href: '#products' },
    { name: 'QUALITY', href: '#quality' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 h-20 shadow-sm">
      <div className="container mx-auto px-6 h-full flex items-center justify-between">

        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="w-14 h-14" />
          <div>
            <div className="font-serif font-bold text-xl text-[#16a34a] leading-none">
              Pacific Pumps
            </div>
            <div className="text-[10px] text-slate-400 uppercase mt-1">
              Wings Flow & Rainbow
            </div>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] font-bold uppercase tracking-widest text-[#16a34a]"
            >
              {link.name}
            </a>
          ))}

          <a
            href="https://wa.me/919849866206?text=Hello%20Pacific%20Pumps"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#25D366] text-lg"
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-[#16a34a]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="flex flex-col items-left py-4 space-y-2 px-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-bold uppercase tracking-widest text-[#16a34a]"
              >
                {link.name}
              </a>
            ))}

            <a
              href="https://wa.me/919849866206?text=Hello%20Wings%20Flow"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] text-xl"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
