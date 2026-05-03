import React from 'react';
import { Link } from 'react-router-dom';
import CategorySection from '../components/CategorySection';
import Newsletter from '../components/Newsletter';

const Home = () => {
 const homeItems = [
    { name: 'Soft chairs', price: '19', imgName: 'b' },
    { name: 'Sofa & chair', price: '19', imgName: 'kit' },
    { name: 'Kitchen dishes', price: '19', imgName: 'lamp' },
    { name: 'Smart watches', price: '19', imgName: 'w' },
    { name: 'Kitchen mixer', price: '100', imgName: 'd' },
    { name: 'Blenders', price: '39', imgName: 'cof' },
    { name: 'Home appliance', price: '19', imgName: 'b' },
    { name: 'Coffee maker', price: '10', imgName: 'kit' }
  ];

  const electronicsItems = [
    { name: 'Smart watches', price: '19', imgName: 'w' },
    { name: 'Cameras', price: '89', imgName: 'c' },
    { name: 'Headphones', price: '10', imgName: 'gaming set' },
    { name: 'Smart watches', price: '90', imgName: 'w' },
    { name: 'Gaming set', price: '35', imgName: 'gaming set' },
    { name: 'Laptops & PC', price: '340', imgName: 'b' },
    { name: 'Smartphones', price: '19', imgName: 'cof' },
    { name: 'Electric kettle', price: '240', imgName: 'lamp' }
  ];

  // 🟢 DEALS DATA
  const deals = [
    { name: 'Smart watches', discount: '-25%', img: 'w.png' },
    { name: 'Laptops', discount: '-15%', img: 'l.png' },
    { name: 'GoPro cameras', discount: '-40%', img: 'c.png' },
    { name: 'Headphones', discount: '-25%', img: 'h.png' },
    { name: 'Canon camreras', discount: '-25%', img: 'c.png' },
  ];
  // 3. Recommended Items ka Data
  const recommendedItems = [
    { name: "T-shirts with multiple colors, for men", price: "10.30", img: "t.png" },
    { name: "Jeans shorts blue color", price: "10.30", img: "tt.jpg" },
    { name: "Brown winter coat medium size", price: "12.50", img: "ccpng.png" },
    { name: "Jeans bag for travel for men", price: "34.00", img: "bbpng.png" },
    { name: "Leather wallet", price: "99.00", img: "bag.png" },
    { name: "Canon camera black, 100x zoom", price: "9.99", img: "c.png" },
    { name: "Headset for gaming with mic", price: "8.99", img: "wh.png" },
    { name: "Smartwatch silver color modern", price: "10.30", img: "bag.png" },
    { name: "Blue wallet for men leather material", price: "10.30", img: "pent.png" },
    { name: "Jeans bag for travel for men", price: "80.95", img: "kk.png" },
  ];

  return (
    <main className="container mx-auto px-4 md:px-12 py-6">
      {/* 1. HERO SECTION */}
      <div className="bg-white border rounded-lg p-4 flex flex-col lg:flex-row shadow-sm mb-6">
        <aside className="w-full lg:w-1/4 pr-4 hidden lg:block">
          <ul className="space-y-1 text-gray-600 text-sm">
            <li className="bg-[#E5F1FF] p-2 rounded-md font-semibold text-black cursor-pointer text-blue-600">Automobiles</li>
            {['Clothes and wear', 'Home interiors', 'Computer and tech', 'Tools, equipments', 'Sports and outdoor', 'Animal and pets', 'Machinery tools', 'More category'].map(item => (
              <li key={item} className="px-2 py-2 cursor-pointer hover:bg-gray-50 rounded transition">{item}</li>
            ))}
          </ul>
        </aside>

        <div className="flex-1 relative mx-0 lg:mx-4">
          <div className="bg-[#B3E5E5] h-64 lg:h-[380px] rounded-sm p-8 lg:p-12 relative flex flex-col justify-center overflow-hidden">
            <img 
              src="/images/banner.png" 
              alt="Electronics" 
              className="absolute right-0 top-0 h-full w-full object-cover mix-blend-multiply opacity-90 hidden md:block z-0" 
            />
            <div className="relative z-10">
              <h3 className="text-xl lg:text-2xl text-[#1C1C1C]">Latest trending</h3>
              <h1 className="text-3xl lg:text-5xl font-bold my-2 text-[#1C1C1C]">Electronic items</h1>
              <Link to="/products" className="bg-white px-6 py-2 rounded-md mt-4 font-bold shadow-sm hover:bg-gray-100 transition inline-block text-black">
                Learn more
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/5 space-y-3 mt-4 lg:mt-0">
          <div className="bg-[#E3F0FF] p-4 rounded-lg">
            <div className="flex items-center space-x-3 mb-3 text-black">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-xl">👤</div>
              <p className="text-sm">Hi, user <br/> let's get started</p>
            </div>
            <button className="w-full bg-[#0D6EFD] text-white py-2 rounded-md text-sm font-bold mb-2">Join now</button>
            <button className="w-full bg-white text-[#0D6EFD] py-2 rounded-md text-sm font-bold border">Log in</button>
          </div>
          <div className="bg-[#F38332] p-4 rounded-lg text-white text-sm">Get US $10 off with a new supplier</div>
          <div className="bg-[#55BDC3] p-4 rounded-lg text-white text-sm">Send quotes with supplier preferences</div>
        </div>
      </div>

      {/* 2. DEALS SECTION */}
      <div className="bg-white border rounded-lg flex flex-col md:flex-row shadow-sm overflow-hidden mb-6">
        <div className="p-6 border-r flex flex-col justify-center min-w-[250px] text-black">
          <h3 className="font-bold text-lg">Deals and offers</h3>
          <p className="text-gray-400 text-sm mb-4">Hygiene equipments</p>
          <div className="flex space-x-2">
            {['04', '13', '34', '56'].map((t, i) => (
              <div key={i} className="bg-gray-800 text-white p-2 rounded text-center w-12">
                <p className="font-bold">{t}</p>
                <p className="text-[10px]">{i === 0 ? 'Days' : i === 1 ? 'Hour' : 'Min'}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex-1 grid grid-cols-2 md:grid-cols-5 divide-x">
           {deals.map((item, i) => (
             <div key={i} className="p-4 text-center hover:bg-gray-50 cursor-pointer text-black">
               <div className="h-32 bg-white rounded mb-2 overflow-hidden flex items-center justify-center">
                  <img 
                    src={`/images/${item.img}`} 
                    alt={item.name} 
                    className="max-h-full object-contain hover:scale-105 transition-transform" 
                  />
               </div>
               <p className="text-sm mb-1">{item.name}</p>
               <span className="bg-[#FFE3E3] text-[#EB001B] px-3 py-1 rounded-full text-[12px] font-medium">
                 {item.discount}
               </span>
             </div>
           ))}
        </div>
      </div>

      {/* 3. CATEGORY BOXES (Left Side Banner Images) */}
      <CategorySection 
        title="Home and outdoor" 
        bgImage="/images/home.jpg" 
        items={homeItems} 
      />
      <CategorySection 
        title="Consumer electronics" 
        bgImage="/images/g.png" 
        items={electronicsItems} 
      />

      {/* 4. SEND QUOTE SECTION (Background Image Path) */}
      <div className="my-8 rounded-lg overflow-hidden flex flex-col md:flex-row relative min-h-[350px]">
        <img 
          src="/images/home.jpg" 
          className="absolute inset-0 w-full h-full object-cover z-0" 
          alt="Warehouse background"
        />
        <div className="absolute inset-0 bg-blue-600/70 z-10"></div>
        <div className="relative z-20 p-10 text-white w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">An easy way to send requests to all suppliers</h2>
          <p className="opacity-90 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="relative z-20 p-8 w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="bg-white p-6 rounded-lg w-full max-w-sm shadow-xl text-black">
            <h3 className="font-bold mb-4 text-lg">Send quote to suppliers</h3>
            <input type="text" placeholder="What item you need?" className="w-full border p-2 rounded mb-3 outline-none focus:border-blue-500" />
            <textarea placeholder="Type more details" className="w-full border p-2 rounded mb-3 h-20 outline-none focus:border-blue-500"></textarea>
            <div className="flex space-x-2 mb-4">
              <input type="number" placeholder="Quantity" className="border p-2 rounded w-1/2 outline-none" />
              <select className="border p-2 rounded w-1/2 outline-none bg-white"><option>Pcs</option></select>
            </div>
            <button className="bg-blue-600 text-white w-fit px-6 py-2 rounded-md font-bold hover:bg-blue-700 transition">Send inquiry</button>
          </div>
        </div>
      </div>

      {/* 5. RECOMMENDED ITEMS (Different Data for Each Item) */}
      <h3 className="text-xl font-bold mb-4 text-black">Recommended items</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
        {recommendedItems.map((item, i) => (
          <div key={i} className="bg-white border rounded-lg p-4 shadow-sm hover:border-blue-400 transition text-black">
            <div className="h-36 bg-gray-50 rounded mb-3 overflow-hidden flex items-center justify-center">
              <img src={`/images/${item.img}`} alt={item.name} className="max-h-full object-contain" />
            </div>
            <p className="font-bold text-gray-800">${item.price}</p>
            <p className="text-gray-500 text-sm mt-1 leading-snug">{item.name}</p>
          </div>
        ))}
      </div>

      {/* 6. EXTRA SERVICES */}
      <h3 className="text-xl font-bold mb-6 text-gray-800">Our extra services</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        {[
          { title: "Source from Industry Hubs", icon: "🔍", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500" },
          { title: "Customize Your Products", icon: "📦", img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500" },
          { title: "Fast, reliable shipping by ocean or air", icon: "✈️", img: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=500" },
          { title: "Product monitoring and inspection", icon: "🛡️", img: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=500" }
        ].map((service, idx) => (
          <div key={idx} className="bg-white border rounded-lg overflow-hidden shadow-sm relative text-black">
            <div className="h-32 relative">
              <img src={service.img} alt={service.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className="absolute -bottom-4 right-4 w-10 h-10 bg-[#D1E7FF] border-2 border-white rounded-full flex items-center justify-center text-lg">{service.icon}</div>
            </div>
            <div className="p-5 pt-6"><p className="text-sm font-medium w-3/4">{service.title}</p></div>
          </div>
        ))}
      </div>

      {/* 7. REGIONS */}
      <h3 className="text-xl font-bold mb-6 text-gray-800">Suppliers by region</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-x-8 gap-y-6 mb-10 text-black">
        {[
          {name: 'Arabic Emirates', site: 'shopname.ae', code: 'ae'},
          {name: 'Australia', site: 'shopname.ae', code: 'au'},
          {name: 'United States', site: 'shopname.ae', code: 'us'},
          {name: 'Russia', site: 'shopname.ru', code: 'ru'},
          {name: 'Italy', site: 'shopname.it', code: 'it'},
          {name: 'Denmark', site: 'denmark.com.dk', code: 'dk'},
          {name: 'France', site: 'shopname.com.fr', code: 'fr'},
          {name: 'Arabic Emirates', site: 'shopname.ae', code: 'ae'},
          {name: 'China', site: 'shopname.ae', code: 'cn'},
          {name: 'Great Britain', site: 'shopname.co.uk', code: 'gb'}
        ].map((region, idx) => (
          <div key={idx} className="flex items-center space-x-4">
            <img src={`https://flagcdn.com/w40/${region.code}.png`} alt={region.name} className="w-7 h-5 object-cover rounded-sm" />
            <div className="leading-tight">
              <p className="text-sm font-medium">{region.name}</p>
              <p className="text-xs text-gray-400">{region.site}</p>
            </div>
          </div>
        ))}
      </div>
      <Newsletter />
    </main>
  );
};

export default Home;