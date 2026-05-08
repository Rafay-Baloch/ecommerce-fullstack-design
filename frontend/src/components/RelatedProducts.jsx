import React from 'react';

const RelatedProducts = ({ products }) => {
  return (
    <div className="mt-8 mb-10 bg-white border rounded-lg p-6 shadow-sm">
      <h3 className="text-xl font-bold mb-6 text-gray-900">Related products</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {products.slice(0, 6).map((p) => (
          <div key={p._id} className="cursor-pointer group">
            <div className="aspect-square border rounded-md p-3 mb-2 bg-[#F7F7F7] flex items-center justify-center overflow-hidden">
              <img src={p.image} alt={p.name} className="max-h-full max-w-full object-contain group-hover:scale-110 transition" />
            </div>
            <p className="text-sm text-gray-700 line-clamp-1">{p.name}</p>
            <p className="text-gray-400 text-xs mt-1">${p.price} - ${p.price + 10}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;