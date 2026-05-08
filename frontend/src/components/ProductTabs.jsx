import React, { useState } from 'react';

const ProductTabs = ({ description }) => {
  const [activeTab, setActiveTab] = useState('Description');

  return (
    <div className="bg-white border rounded-lg mt-6 shadow-sm overflow-hidden">
      <div className="flex border-b text-gray-500 font-medium overflow-x-auto">
        {['Description', 'Reviews', 'Shipping', 'About seller'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-4 text-sm whitespace-nowrap transition ${activeTab === tab ? 'text-blue-600 border-b-2 border-blue-600 bg-gray-50' : 'hover:bg-gray-50'}`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="p-6 text-gray-600 text-sm leading-relaxed">
        {activeTab === 'Description' ? (
          <div>
            <p className="mb-4">{description}</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Model: #8786867</li>
              <li>Style: Classic style</li>
              <li>Certificate: ISO-898921212</li>
            </ul>
          </div>
        ) : (
          <p>Details for {activeTab} will appear here.</p>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;