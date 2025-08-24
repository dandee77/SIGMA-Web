import React from 'react';
const Navbar = () => {
  return <nav className="w-full py-4 px-6 md:px-12 flex items-center justify-between border-b border-gray-200 bg-white">
      <div className="flex items-center">
        <div className="text-2xl font-bold flex items-center">
          <span className="text-black text-3xl mr-2">Σ</span>
          <span>SIGMA Solutions</span>
        </div>
      </div>
      <div className="hidden md:flex items-center space-x-8">
        <a href="#" className="hover:text-gray-600 transition-colors">
          Home
        </a>
        <a href="#" className="hover:text-gray-600 transition-colors">
          Services
        </a>
        <a href="#" className="hover:text-gray-600 transition-colors">
          About
        </a>
        <a href="#" className="hover:text-gray-600 transition-colors">
          Process
        </a>
        <a href="#" className="hover:text-gray-600 transition-colors">
          Contact
        </a>
      </div>
      <div className="flex items-center space-x-4">
        <select className="bg-transparent border-none text-sm focus:outline-none">
          <option value="en">EN</option>
          <option value="fr">FR</option>
          <option value="es">ES</option>
        </select>
        <button className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-md transition-colors">
          Get Started
        </button>
      </div>
    </nav>;
};
export default Navbar;