import React from 'react';
import { useLocation } from 'react-router-dom';

const ProductDetail = () => {
  const location = useLocation();
  
  // Default data agar direct page open ho jaye
  const product = location.state || { 
    name: "Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle", 
    img: "/images/items/gaming-set.png", 
    price: "98.00" 
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-10">
      <div className="container mx-auto px-4 md:px-12 py-6 text-black">
        
        {/* Breadcrumbs */}
        <div className="text-gray-400 text-sm mb-4">
          Home {'>'} Clothings {'>'} Men's wear {'>'} Summer clothing
        </div>

        {/* 1. MAIN PRODUCT SECTION */}
        <div className="bg-white border rounded-lg p-6 shadow-sm flex flex-col lg:flex-row gap-8">
          
          {/* Left: Images */}
          <div className="lg:w-1/3">
            <div className="border rounded-lg p-4 mb-4 flex justify-center h-80 bg-white">
              <img src={product.img} alt={product.name} className="h-full object-contain" />
            </div>
            {/* Thumbnails mein bhi wahi image dikhayenge */}
            <div className="grid grid-cols-6 gap-2">
              {[1,2,3,4,5,6].map(i => (
                <div key={i} className="border rounded p-1 cursor-pointer hover:border-blue-500 bg-white aspect-square flex items-center justify-center">
                  <img src={product.img} alt="thumb" className="max-h-full object-contain" />
                </div>
              ))}
            </div>
          </div>

          {/* Middle: Info */}
          <div className="lg:w-1/2">
            <p className="text-green-500 text-sm font-medium">✓ In stock</p>
            <h1 className="text-xl font-bold mt-2 text-gray-900">{product.name}</h1>
            
            <div className="flex items-center gap-4 my-3 text-sm">
              <div className="text-orange-400">★★★★☆ <span className="text-orange-500 ml-1">9.3</span></div>
              <div className="text-gray-400">• 32 reviews • 154 sold</div>
            </div>

            <div className="bg-[#FFF0DF] p-4 flex gap-8 mb-6 rounded">
              <div className="border-r border-orange-200 pr-8">
                <p className="text-red-500 font-bold text-xl">${product.price}</p>
                <p className="text-xs text-gray-500">50-100 pcs</p>
              </div>
              <div className="border-r border-orange-200 pr-8">
                <p className="font-bold text-xl">$90.00</p>
                <p className="text-xs text-gray-500">100-700 pcs</p>
              </div>
              <div>
                <p className="font-bold text-xl">$78.00</p>
                <p className="text-xs text-gray-500">700+ pcs</p>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex border-b pb-2"><span className="w-32 text-gray-400">Price:</span> <span className="text-gray-700">Negotiable</span></div>
              <div className="flex border-b pb-2"><span className="w-32 text-gray-400">Type:</span> <span className="text-gray-700">Classic style</span></div>
              <div className="flex border-b pb-2"><span className="w-32 text-gray-400">Material:</span> <span className="text-gray-700">Premium quality</span></div>
              <div className="flex"><span className="w-32 text-gray-400">Design:</span> <span className="text-gray-700">Modern nice</span></div>
            </div>
          </div>

          {/* Right: Supplier Card */}
          <div className="lg:w-1/4">
            <div className="border rounded-lg p-4 shadow-sm bg-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#C3F2FF] w-12 h-12 rounded flex items-center justify-center text-xl font-bold text-[#4CA7A7]">R</div>
                <div className="text-sm">
                  <p className="font-medium text-gray-900">Supplier</p>
                  <p className="text-gray-600">Guanjoi Trading LLC</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-gray-500 border-t pt-4">
                <p>🇩🇪 Germany, Berlin</p>
                <p>🛡 Verified Seller</p>
                <p>🌐 Worldwide shipping</p>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded-md mt-4 font-bold hover:bg-blue-700 transition shadow-sm">Send inquiry</button>
              <button className="w-full bg-white text-blue-600 border border-gray-200 py-2 rounded-md mt-2 font-bold hover:bg-gray-50 transition">Seller's profile</button>
            </div>
            <button className="w-full text-center text-blue-600 font-medium mt-4 hover:underline transition">❤️ Save for later</button>
          </div>
        </div>

        {/* 2. DESCRIPTION & YOU MAY LIKE */}
        <div className="flex flex-col lg:flex-row gap-6 mt-8">
          <div className="lg:w-3/4 bg-white border rounded-lg overflow-hidden shadow-sm">
            <div className="flex border-b text-sm font-medium text-gray-400 bg-gray-50">
              <button className="px-6 py-4 border-b-2 border-blue-600 text-blue-600 bg-white">Description</button>
              <button className="px-6 py-4 hover:text-gray-600">Reviews</button>
              <button className="px-6 py-4 hover:text-gray-600">Shipping</button>
              <button className="px-6 py-4 hover:text-gray-600">About seller</button>
            </div>
            <div className="p-6 text-gray-600 text-sm leading-relaxed">
              <p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <table className="w-full md:w-1/2 border-collapse mb-6">
                <tbody>
                  <tr className="border"><td className="p-2 bg-gray-50 w-1/3 font-semibold">Model</td><td className="p-2">#8786867</td></tr>
                  <tr className="border"><td className="p-2 bg-gray-50 font-semibold">Style</td><td className="p-2">Classic style</td></tr>
                  <tr className="border"><td className="p-2 bg-gray-50 font-semibold">Certificate</td><td className="p-2">ISO-898921212</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 🟢 You May Like (Now Dynamic) */}
          <div className="lg:w-1/4">
            <div className="bg-white border rounded-lg p-4 shadow-sm">
              <h3 className="font-bold mb-4 text-gray-900 border-b pb-2">You may like</h3>
              {[1,2,3,4,5].map(i => (
                <div key={i} className="flex gap-3 mb-4 items-center group cursor-pointer">
                  <div className="w-14 h-14 border rounded p-1 shrink-0 bg-white flex items-center justify-center overflow-hidden">
                    {/* Yahan bhi clicked product ki image show hogi */}
                    <img src={product.img} alt="related" className="max-h-full object-contain group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-sm">
                    <p className="text-gray-800 line-clamp-1 group-hover:text-blue-600 transition-colors font-medium">{product.name}</p>
                    <p className="text-gray-400 font-bold">${(parseFloat(product.price) - 5).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 🟢 3. RELATED PRODUCTS (Now Dynamic) */}
        <div className="bg-white border rounded-lg p-6 mt-8 shadow-sm">
          <h3 className="text-xl font-bold mb-6 text-gray-900 border-b pb-2">Related products</h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="group cursor-pointer">
                <div className="bg-white border border-gray-100 rounded-lg p-4 mb-2 h-40 flex items-center justify-center overflow-hidden shadow-sm group-hover:border-blue-200 transition-all">
                  <img src={product.img} className="max-h-full object-contain group-hover:scale-105 transition-transform" alt="related" />
                </div>
                <p className="text-sm text-gray-700 line-clamp-1 font-medium group-hover:text-blue-600 transition-colors">{product.name}</p>
                <p className="text-sm text-gray-500 font-bold">${product.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. BLUE DISCOUNT BANNER */}
        <div className="bg-[#0067FF] rounded-lg p-8 mt-10 flex flex-col md:flex-row justify-between items-center text-white relative overflow-hidden shadow-lg border-2 border-blue-400">
          <div className="absolute right-0 top-0 h-full w-1/4 bg-blue-500 skew-x-[-20deg] translate-x-12 opacity-30"></div>
          <div className="relative z-10 text-center md:text-left">
            <h2 className="text-2xl font-bold">Super discount on more than 100 USD</h2>
            <p className="opacity-90 mt-1 font-light italic">Limited time offer for our premium members</p>
          </div>
          <button className="relative z-10 bg-[#FF9017] hover:bg-orange-600 text-white px-8 py-2.5 rounded-md font-bold transition-all shadow-md mt-6 md:mt-0 active:scale-95">
            Shop now
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;