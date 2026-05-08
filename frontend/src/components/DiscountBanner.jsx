import React from 'react';

const DiscountBanner = () => {
  return (
    <div className="container mx-auto px-4 md:px-12 my-10">
      <div className="bg-[#237CFF] rounded-lg p-8 flex flex-col md:flex-row justify-between items-center shadow-md overflow-hidden relative">
        {/* Background Design (Optional) */}
        <div className="absolute right-0 top-0 w-32 h-full bg-blue-500 opacity-20 skew-x-12 translate-x-10"></div>
        
        <div className="relative z-10">
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-2">
            Super discount on more than 100 USD
          </h2>
          <p className="text-blue-100 text-sm opacity-80">
            Have you ever finally just write dummy info
          </p>
        </div>

        <button className="relative z-10 bg-[#FF9017] text-white px-6 py-3 rounded-lg font-bold mt-6 md:mt-0 hover:bg-orange-600 transition shadow-lg">
          Shop now
        </button>
      </div>
    </div>
  );
};

export default DiscountBanner;