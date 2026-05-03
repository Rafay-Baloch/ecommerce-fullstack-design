import React from 'react';

const Newsletter = () => {
  return (
    <div className="bg-[#EFF2F4] py-10 text-center">
      <h3 className="text-xl font-bold text-[#1C1C1C]">Subscribe on our newsletter</h3>
      <p className="text-[#606060] mb-6 text-sm">Get daily news on upcoming offers from many suppliers all over the world</p>
      <div className="flex justify-center max-w-md mx-auto px-4">
        <input 
          type="email" 
          placeholder="Email" 
          className="border border-gray-300 p-2 rounded-l-md w-full outline-none" 
        />
        <button className="bg-[#0D6EFD] text-white px-6 py-2 rounded-r-md font-bold text-sm hover:bg-blue-700 transition">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;