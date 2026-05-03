import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-white">
      {/* Upper Navbar - Logo aur Profile Icons */}
      <div className="border-b px-4 md:px-12 py-4 flex items-center justify-between">
        {/* Logo with Icon */}
        <div className="flex items-center space-x-2">
          <div className="bg-blue-500 p-2 rounded-lg text-white">
             {/* Figma wala Blue Bag Icon placeholder */}
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          </div>
          <div className="text-2xl font-bold text-blue-500">Brand</div>
        </div>

        {/* Search Bar with All Category Dropdown */}
        <div className="flex-1 mx-10 hidden md:flex border-2 border-blue-500 rounded-md overflow-hidden">
          <input type="text" placeholder="Search" className="flex-1 px-4 py-2 outline-none" />
          <div className="border-l px-4 py-2 bg-white flex items-center text-sm border-gray-200 cursor-pointer">
            All category <span className="ml-2">▼</span>
          </div>
          <button className="bg-blue-500 text-white px-8 py-2 font-bold">Search</button>
        </div>

        {/* Action Icons (Profile, Message, etc.) */}
        <div className="flex space-x-6 text-gray-400 text-[10px] text-center">
          <div className="cursor-pointer">👤<p>Profile</p></div>
          <div className="cursor-pointer">💬<p>Message</p></div>
          <div className="cursor-pointer">❤️<p>Orders</p></div>
          <Link to="/cart" className="cursor-pointer text-gray-800 font-bold hover:text-blue-600 transition-colors">
    <div className="flex flex-col items-center">
      <span>🛒</span>
      <p>My cart</p>
    </div>
  </Link>
        </div>
      </div>

      {/* Lower Bar - Navigation & Country Selection */}
      {/* Lower Bar - Navigation & Country Selection */}
<div className="border-b px-4 md:px-12 py-3 flex items-center justify-between text-sm font-medium">
  <div className="flex space-x-6">
    <span className="flex items-center cursor-pointer hover:text-blue-600 transition">
      <span className="mr-2">☰</span> All category
    </span>
    <span className="cursor-pointer hover:text-blue-600 transition">Hot offers</span>
    <span className="cursor-pointer hover:text-blue-600 transition">Gift boxes</span>
    <span className="cursor-pointer hover:text-blue-600 transition">Projects</span>
    <span className="cursor-pointer hover:text-blue-600 transition">Menu item</span>
    <span className="flex items-center cursor-pointer hover:text-blue-600 transition">Help ▼</span>
  </div>

  <div className="hidden lg:flex items-center space-x-6">
    <div className="flex items-center cursor-pointer hover:text-blue-600 transition">
      English, USD <span className="ml-2 text-[10px]">▼</span>
    </div>
    <div className="flex items-center cursor-pointer hover:text-blue-600 transition">
      <span className="mr-2">Ship to</span>
      {/* Germany (DE) Flag - Figma ke mutabiq */}
      <img 
        src="https://flagcdn.com/w20/de.png" 
        alt="Germany Flag" 
        className="w-5 h-3 shadow-sm mr-1" 
      />
      <span className="text-[10px]">▼</span>
    </div>
  </div>
</div>
    </header>
  );
};

export default Navbar;