import React from 'react';

const services = [
  { title: "Source from Industry Hubs", img: "https://images.pexels.com/photos/4481326/pexels-photo-4481326.jpeg", icon: "🔍" },
  { title: "Customize Your Products", img: "https://images.pexels.com/photos/38271/ipad-map-tablet-internet-38271.jpeg", icon: "📦" },
  { title: "Fast, reliable shipping by ocean or air", img: "https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg", icon: "✈️" },
  { title: "Product monitoring and inspection", img: "https://images.pexels.com/photos/4484151/pexels-photo-4484151.jpeg", icon: "🛡️" },
];

const ExtraServices = () => {
  return (
    <div className="px-4 md:px-12 my-10">
      <h2 className="text-2xl font-bold mb-6 text-black">Our extra services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <div key={i} className="bg-white border rounded-lg overflow-hidden relative shadow-sm hover:shadow-md transition">
            <img src={s.img} className="w-full h-32 object-cover" alt={s.title} />
            <div className="absolute top-24 right-4 bg-[#D1E7FF] p-3 rounded-full border-4 border-white text-xl">
               {s.icon}
            </div>
            <div className="p-4 pt-8">
              <p className="font-medium text-black w-40 leading-tight">{s.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExtraServices;