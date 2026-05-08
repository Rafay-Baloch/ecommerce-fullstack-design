import React from 'react';

const InquiryForm = () => {
  return (
    <div className="bg-blue-600 rounded-lg p-10 flex flex-col md:flex-row justify-between items-center my-10 text-white shadow-lg mx-4 md:mx-12">
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-4">An easy way to send requests to all suppliers</h2>
        <p className="opacity-80">Send your inquiry to hundreds of suppliers and get the best quotes.</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg text-black w-full md:w-[400px] mt-6 md:mt-0">
        <h3 className="font-bold mb-4">Send inquiry to suppliers</h3>
        <input type="text" placeholder="What item you need?" className="w-full border p-2 rounded mb-3 text-sm" />
        <textarea placeholder="Type more details" className="w-full border p-2 rounded mb-3 h-24 text-sm"></textarea>
        <div className="flex gap-2">
           <input type="number" placeholder="Quantity" className="w-1/2 border p-2 rounded text-sm" />
           <select className="border p-2 rounded w-1/2 text-sm text-gray-500">
             <option>Pcs</option>
             <option>Litres</option>
             <option>Kg</option>
           </select>
        </div>
        <button className="bg-blue-600 text-white w-full py-2 rounded-md mt-4 font-bold hover:bg-blue-700 transition">
          Send inquiry
        </button>
      </div>
    </div>
  );
};

export default InquiryForm;