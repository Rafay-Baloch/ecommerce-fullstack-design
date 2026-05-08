import React from 'react';

const CategorySection = ({ title, bgImage, items }) => {
  return (
    <div className="bg-white border rounded-lg flex flex-col md:flex-row shadow-sm mb-6 overflow-hidden">
      
      {/* 1. Left Side: Banner */}
      <div 
        className="p-6 w-full md:w-1/4 bg-cover bg-center flex flex-col justify-start relative min-h-[200px]" 
        style={{ backgroundImage: `url(${bgImage})`, backgroundColor: '#e2e8f0' }}
      >
        <div className="relative z-10">
          <h3 className="font-bold text-lg w-24 leading-tight text-black">{title}</h3>
          <button className="bg-white px-4 py-2 rounded-md mt-4 text-xs font-bold shadow-sm hover:bg-gray-100 transition text-black">
            Source now
          </button>
        </div>
      </div>

      {/* 2. Right Side: Product Grid */}
      <div className="flex-1 grid grid-cols-2 md:grid-cols-4 divide-x divide-y border-l">
        {items.map((item, index) => (
          <div key={index} className="p-4 flex flex-col justify-between hover:bg-gray-50 cursor-pointer h-32 transition">
            <p className="text-sm font-medium text-black">{item.name}</p>
            
            <div className="flex justify-between items-end">
              <span className="text-gray-400 text-[10px]">From <br/> USD {item.price}</span>
              
              <div className="w-16 h-16 flex items-center justify-center overflow-hidden">
                <img 
                  // 🟢 Yahan item.imgName ki bajaye item.image use karein
                  src={item.image} 
                  alt={item.name} 
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/150'; }} 
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;