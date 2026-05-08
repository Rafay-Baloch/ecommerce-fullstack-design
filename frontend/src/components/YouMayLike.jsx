import React from 'react';

const YouMayLike = ({ products }) => {
  return (
    <div className="bg-white border rounded-lg p-4 shadow-sm">
      <h3 className="font-bold text-gray-900 mb-4">You may like</h3>
      <div className="space-y-4">
        {products.slice(0, 5).map((p) => (
          <div key={p._id} className="flex gap-3 items-center group cursor-pointer">
            <div className="w-16 h-16 border rounded p-1 shrink-0 bg-white">
              <img src={p.image} alt={p.name} className="w-full h-full object-contain" />
            </div>
            <div>
              <p className="text-sm text-gray-800 line-clamp-2 group-hover:text-blue-600">{p.name}</p>
              <p className="text-gray-400 text-xs mt-1">${p.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouMayLike;