import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';
import Newsletter from '../components/Newsletter';

const ProductList = () => {
  const [viewType, setViewType] = useState('grid');

  const products = [
    { id: 1, name: "Canon Cmera EOS 2000, Black 10x zoom", price: "99.50", oldPrice: "1128.00", orders: "154", rating: "7.5", img: "/images/mob.png" },
    { id: 2, name: "GoPro HERO6 4K Action Camera - Black", price: "99.50", oldPrice: "1128.00", orders: "154", rating: "5.9", img: "/images/m.png" },
    { id: 3, name: "GoPro HERO6 4K Action Camera - Black", price: "99.50", oldPrice: "1128.00", orders: "154", rating: "7.5", img: "/images/mm.png" },
    { id: 4, name: "GoPro HERO6 4K Action Camera - Black", price: "99.50", oldPrice: "1128.00", orders: "154", rating: "7.5", img: "/images/l.png" },
    { id: 5, name: "GoPro HERO6 4K Action Camera - Black", price: "99.50", oldPrice: "1128.00", orders: "154", rating: "7.5", img: "/images/www.png" },
    { id: 6, name: "GoPro HERO6 4K Action Camera - Black", price: "99.50", oldPrice: "1128.00", orders: "154", rating: "7.5", img: "/images/wh.png" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-12 py-6">
        
        <div className="text-gray-400 text-sm mb-4">
          Home {'>'} Clothings {'>'} Men's wear {'>'} Summer clothing
        </div>

        <div className="flex flex-col md:flex-row">
          <Sidebar />

          <div className="flex-1">
            
            <div className="bg-white border p-3 rounded-lg flex justify-between items-center mb-4 shadow-sm">
              <p className="text-sm">12,911 items in <span className="font-bold">Mobile accessory</span></p>
              <div className="flex items-center space-x-4">
                <label className="hidden md:flex items-center space-x-2 text-sm">
                  <input type="checkbox" defaultChecked /> <span>Verified only</span>
                </label>
                <select className="border p-2 text-sm rounded bg-white outline-none">
                  <option>Featured</option>
                </select>
                <div className="flex border rounded overflow-hidden shadow-sm">
                  <button 
                    onClick={() => setViewType('list')}
                    className={`p-2 transition-colors ${viewType === 'list' ? 'bg-gray-200' : 'bg-white hover:bg-gray-50'}`}
                  >
                    ▤
                  </button>
                  <button 
                    onClick={() => setViewType('grid')}
                    className={`p-2 transition-colors ${viewType === 'grid' ? 'bg-gray-200' : 'bg-white hover:bg-gray-50'}`}
                  >
                    ▦
                  </button>
                </div>
              </div>
            </div>

            {/* View Switching Logic */}
            {/* 🟢 1. Grid View Fix - Sub images ko fit karne ke liye updated */}
{viewType === 'grid' ? (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {products.map(p => (
      <div key={p.id} className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition flex flex-col">
        {/* Image Container: Padding zyada ki hai aur aspect ratio square rakha hai */}
        <div className="w-full aspect-square flex items-center justify-center mb-4 p-6 overflow-hidden bg-white">
          <Link to="/product-detail" state={{ name: p.name, img: p.img, price: p.price }} className="w-full h-full flex items-center justify-center">
            <img 
              src={p.img} 
              alt={p.name} 
              className="max-h-full max-w-full object-contain cursor-pointer hover:scale-105 transition-transform" 
            />
          </Link>
        </div>
        
        <hr className="mb-4 opacity-50" />
        
        <div className="flex justify-between items-start flex-1">
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-lg text-[#1C1C1C]">${p.price}</span>
              <span className="text-gray-400 line-through text-sm">${p.oldPrice}</span>
            </div>
            <div className="text-orange-400 text-sm my-1 flex items-center">
              ★★★★☆ <span className="text-gray-600 ml-2 font-medium">{p.rating}</span>
            </div>
            <Link to="/product-detail" state={{ name: p.name, img: p.img, price: p.price }} className="hover:text-blue-600">
              <p className="text-gray-600 text-sm leading-snug line-clamp-2">{p.name}</p>
            </Link>
          </div>
          <button className="text-blue-500 border p-2 rounded-md hover:bg-blue-50 transition shadow-sm shrink-0">❤️</button>
        </div>
      </div>
    ))}
  </div>
) : (
              <div className="space-y-3">
                {products.map(p => (
                  <div key={p.id} className="bg-white border rounded-lg p-4 flex flex-col md:flex-row space-x-0 md:space-x-6 hover:shadow-md transition">
                    {/* 🟢 List View Image Fix */}
                    <div className="w-full md:w-48 h-48 flex items-center justify-center p-4 border rounded-md shrink-0 overflow-hidden bg-white">
                      <Link to="/product-detail" state={{ name: p.name, img: p.img, price: p.price }}>
                        <img 
                          src={p.img} 
                          alt={p.name} 
                          className="max-h-full max-w-full object-contain cursor-pointer" 
                        />
                      </Link>
                    </div>
                    <div className="flex-1 mt-4 md:mt-0">
                      <div className="flex justify-between">
                        <Link to="/product-detail" state={{ name: p.name, img: p.img, price: p.price }} className="hover:text-blue-600">
                          <h3 className="text-lg font-medium text-gray-800">{p.name}</h3>
                        </Link>
                        <button className="text-blue-500 border p-2 rounded-md hover:bg-blue-50 transition shadow-sm">❤️</button>
                      </div>
                      <div className="flex items-center space-x-3 my-1">
                        <span className="text-xl font-bold text-gray-900">${p.price}</span>
                        {p.oldPrice && <span className="text-gray-400 line-through text-sm">${p.oldPrice}</span>}
                      </div>
                      <div className="flex items-center space-x-2 text-orange-400 text-sm mb-2">
                        <span>★★★★☆</span> 
                        <span className="text-gray-600 font-medium">{p.rating}</span> 
                        <span className="text-gray-400">• {p.orders} orders •</span>
                        <span className="text-green-500 font-medium">Free Shipping</span>
                      </div>
                      <p className="text-gray-500 text-sm mb-4 leading-relaxed line-clamp-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                      <Link to="/product-detail" state={{ name: p.name, img: p.img, price: p.price }} className="text-blue-600 font-bold text-sm hover:underline">
                        View details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-8 flex justify-end space-x-2">
              <select className="border p-2 rounded text-sm bg-white outline-none">
                <option>Show 10</option>
              </select>
              <div className="flex border rounded bg-white overflow-hidden shadow-sm">
                <button className="px-3 py-2 border-r hover:bg-gray-100">{'<'}</button>
                <button className="px-3 py-2 border-r bg-gray-200 font-bold">1</button>
                <button className="px-3 py-2 border-r hover:bg-gray-100">2</button>
                <button className="px-3 py-2 border-r hover:bg-gray-100">3</button>
                <button className="px-3 py-2 hover:bg-gray-100">{'>'}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12">
          <Newsletter />
      </div>
    </div>
  );
};

export default ProductList;