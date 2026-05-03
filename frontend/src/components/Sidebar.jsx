import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-full md:w-64 pr-6 hidden md:block">
      {/* Category Section */}
      <div className="border-t py-4">
        <h4 className="font-bold mb-3 flex justify-between text-[#1C1C1C] text-sm">Category <span className="text-gray-400">^</span></h4>
        <ul className="text-gray-600 space-y-2 text-sm">
          {['Mobile accessory', 'Electronics', 'Smartphones', 'Modern tech'].map(item => (
            <li key={item} className="cursor-pointer hover:text-blue-600 transition">{item}</li>
          ))}
          <li className="text-blue-600 cursor-pointer font-medium">See all</li>
        </ul>
      </div>

      {/* Brands Section */}
      <div className="border-t py-4">
        <h4 className="font-bold mb-3 flex justify-between text-[#1C1C1C] text-sm">Brands <span className="text-gray-400">^</span></h4>
        <div className="space-y-2 text-sm text-gray-600">
          {['Samsung', 'Apple', 'Huawei', 'Pocco', 'Lenovo'].map(brand => (
            <label key={brand} className="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" /> 
              <span>{brand}</span>
            </label>
          ))}
          <p className="text-blue-600 cursor-pointer pt-1 font-medium">See all</p>
        </div>
      </div>

      {/* Price Range Section */}
      <div className="border-t py-4">
        <h4 className="font-bold mb-3 flex justify-between text-[#1C1C1C] text-sm">Price range <span className="text-gray-400">^</span></h4>
        <div className="space-y-4">
          <input type="range" className="w-full h-1 bg-blue-100 rounded-lg appearance-none cursor-pointer accent-blue-600" />
          <div className="flex space-x-2">
            <div className="flex-1">
              <p className="text-[10px] text-gray-400 mb-1">Min</p>
              <input type="number" placeholder="0" className="border border-gray-300 w-full p-2 rounded text-sm outline-none focus:border-blue-500" />
            </div>
            <div className="flex-1">
              <p className="text-[10px] text-gray-400 mb-1">Max</p>
              <input type="number" placeholder="99999" className="border border-gray-300 w-full p-2 rounded text-sm outline-none focus:border-blue-500" />
            </div>
          </div>
          <button className="w-full bg-white border border-gray-300 text-blue-600 py-2 rounded-md font-bold shadow-sm hover:bg-gray-50 transition">
            Apply
          </button>
        </div>
      </div>

      {/* Condition Section */}
      <div className="border-t py-4">
        <h4 className="font-bold mb-3 flex justify-between text-[#1C1C1C] text-sm">Condition <span className="text-gray-400">^</span></h4>
        <div className="space-y-2 text-sm text-gray-600">
          {['Any', 'Refurbished', 'Brand new', 'Old items'].map((cond, i) => (
            <label key={i} className="flex items-center space-x-2 cursor-pointer">
              <input type="radio" name="condition" defaultChecked={i===0} className="text-blue-600 focus:ring-blue-500" /> 
              <span>{cond}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Ratings Section */}
      <div className="border-t py-4">
        <h4 className="font-bold mb-3 flex justify-between text-[#1C1C1C] text-sm">Ratings <span className="text-gray-400">^</span></h4>
        <div className="space-y-2">
          {[5, 4, 3, 2].map(star => (
            <label key={star} className="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" className="rounded border-gray-300 text-blue-600" />
              <span className="text-orange-400 text-lg">
                {'★'.repeat(star)}{'☆'.repeat(5-star)}
              </span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;