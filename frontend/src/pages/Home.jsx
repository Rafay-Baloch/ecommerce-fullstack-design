import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CategorySection from '../components/CategorySection';
import Newsletter from '../components/Newsletter';
import InquiryForm from '../components/InquiryForm';
import ExtraServices from '../components/ExtraServices';

const Home = () => {
  const [products, setProducts] = useState([]);

  // 1. Database se products khinch kar lana
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/products');
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  // 2. Data ko categories ke mutabiq filter karna
  const homeItems = products.filter(p => p.category === 'Home and outdoor' || p.category === 'Home interiors').slice(0, 8);
  const electronicsItems = products.filter(p => p.category === 'Electronics' || p.category === 'Consumer electronics').slice(0, 8);
  const recommendedItems = products.slice(0, 10);

  // 3. Deals data (Static hi rehne dein kyunke ye khas offers hain)
  const deals = [
    { name: 'Smart watches', discount: '-25%', img: 'w.png' },
    { name: 'Laptops', discount: '-15%', img: 'l.png' },
    { name: 'GoPro cameras', discount: '-40%', img: 'c.png' },
    { name: 'Headphones', discount: '-25%', img: 'h.png' },
    { name: 'Canon cameras', discount: '-25%', img: 'c.png' },
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
            <img src="/images/banner.png" alt="Banner" className="absolute right-0 top-0 h-full w-full object-cover mix-blend-multiply opacity-90 hidden md:block z-0" />
            <div className="relative z-10">
              <h3 className="text-xl lg:text-2xl text-[#1C1C1C]">Latest trending</h3>
              <h1 className="text-3xl lg:text-5xl font-bold my-2 text-[#1C1C1C]">Electronic items</h1>
              <Link to="/products" className="bg-white px-6 py-2 rounded-md mt-4 font-bold shadow-sm hover:bg-gray-100 transition inline-block text-black">Learn more</Link>
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
                <img src={`/images/${item.img}`} alt={item.name} className="max-h-full object-contain hover:scale-105 transition-transform" />
              </div>
              <p className="text-sm mb-1">{item.name}</p>
              <span className="bg-[#FFE3E3] text-[#EB001B] px-3 py-1 rounded-full text-[12px] font-medium">{item.discount}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. DYNAMIC CATEGORY SECTIONS */}
      <CategorySection title="Home and outdoor" bgImage="/images/home.jpg" items={homeItems} />
      <CategorySection title="Consumer electronics" bgImage="/images/g.png" items={electronicsItems} />
          <InquiryForm />
          
      {/* 4. DYNAMIC RECOMMENDED ITEMS */}
      <h3 className="text-xl font-bold mb-4 text-black">Recommended items</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
        {recommendedItems.map((item) => (
          <div key={item._id} className="bg-white border rounded-lg p-4 shadow-sm hover:border-blue-400 transition text-black">
            <div className="h-36 bg-gray-50 rounded mb-3 overflow-hidden flex items-center justify-center">
              <img src={item.image} alt={item.name} className="max-h-full object-contain" />
            </div>
            <p className="font-bold text-gray-800">${item.price}</p>
            <p className="text-gray-500 text-sm mt-1 leading-snug">{item.name}</p>
          </div>
        ))}
      </div>
        <ExtraServices />
      <Newsletter />
    </main>
  );
};

export default Home;