import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // 🟢 Context import kiya

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const { totalItems } = useCart(); // 🟢 Counter uthaya

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/products?search=${searchTerm}`);
    }
  };

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="border-b px-4 md:px-12 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-blue-500 p-2 rounded-lg text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
          </div>
          <div className="text-2xl font-bold text-blue-500">Brand</div>
        </Link>

        <form onSubmit={handleSearch} className="flex-1 mx-10 hidden md:flex border-2 border-blue-500 rounded-md overflow-hidden">
          <input 
            type="text" 
            placeholder="Search products..." 
            className="flex-1 px-4 py-2 outline-none text-black"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="border-l px-4 py-2 bg-white flex items-center text-sm border-gray-200 cursor-pointer text-black">
            All category <span className="ml-2">▼</span>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-8 py-2 font-bold hover:bg-blue-600 transition">
            Search
          </button>
        </form>

        <div className="flex space-x-6 text-gray-400 text-[10px] text-center">
          <div className="cursor-pointer">👤<p>Profile</p></div>
          <div className="cursor-pointer">💬<p>Message</p></div>
          <div className="cursor-pointer">❤️<p>Orders</p></div>
          
          {/* 🟢 Cart Icon with Dynamic Counter */}
          <Link to="/cart" className="cursor-pointer text-gray-800 font-bold hover:text-blue-600 transition-colors relative">
            <div className="flex flex-col items-center">
              <div className="relative">
                <span className="text-xl">🛒</span>
                {/* Agar items 0 se zyada honge tabhi red badge dikhega */}
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
                    {totalItems}
                  </span>
                )}
              </div>
              <p className="mt-1">My cart</p>
            </div>
          </Link>
        </div>
      </div>

      <div className="border-b px-4 md:px-12 py-3 flex items-center justify-between text-sm font-medium text-black">
        <div className="flex space-x-6">
          <span className="flex items-center cursor-pointer hover:text-blue-600">☰ All category</span>
          <span className="cursor-pointer hover:text-blue-600">Hot offers</span>
          <span className="cursor-pointer hover:text-blue-600">Gift boxes</span>
          <span className="cursor-pointer hover:text-blue-600">Projects</span>
          <span className="cursor-pointer hover:text-blue-600">Menu item</span>
          <span className="flex items-center cursor-pointer hover:text-blue-600">Help ▼</span>
        </div>
        <div className="hidden lg:flex items-center space-x-6">
          <div className="flex items-center cursor-pointer">English, USD <span className="ml-2 text-[10px]">▼</span></div>
          <div className="flex items-center cursor-pointer">
            <span className="mr-2">Ship to</span>
            <img src="https://flagcdn.com/w20/de.png" alt="DE" className="w-5 h-3 mr-1" />
            <span className="text-[10px]">▼</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;