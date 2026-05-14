import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { Link, useLocation } from 'react-router-dom'; // 🟢 Location for search
import Newsletter from '../components/Newsletter';
import axios from 'axios';

const ProductList = () => {
  const [viewType, setViewType] = useState('grid');
  const [products, setProducts] = useState([]);
  const location = useLocation();

  // 🟢 Extract search query from URL (e.g., ?search=watch)
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('search');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('https://hospitable-transformation-production-904d.up.railway.app/api/products');
        
        // 🟢 If there is a search query, filter the data locally
        if (searchQuery) {
          const filtered = data.filter(p => 
            p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
            p.category.toLowerCase().includes(searchQuery.toLowerCase())
          );
          setProducts(filtered);
        } else {
          setProducts(data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [searchQuery]); // 🟢 Re-run when search changes

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-12 py-6">
        {/* Breadcrumb */}
        <div className="text-gray-400 text-sm mb-4 text-black font-medium">
          Home {'>'} Electronics {'>'} Accessories
        </div>

        {/* 🟢 Parent Container: 'items-start' aur 'relative' zaroori hain */}
        <div className="flex flex-col md:flex-row items-start gap-6 relative">
          
          {/* 🟢 FIXED SIDEBAR CODE:
              - z-10: Taake ye Navbar (z-50) ke peeche rahe
              - top-[90px]: Navbar ki height ke mutabiq gap
          */}
         <aside className="hidden md:block w-64 sticky top-[130px] h-[calc(100vh-140px)] overflow-y-auto pr-2 custom-scrollbar z-10">
  <Sidebar />
</aside>

          <div className="flex-1">
            {/* Control Bar (Items found & View Type) */}
            <div className="bg-white border p-3 rounded-lg flex justify-between items-center mb-4 shadow-sm text-black">
              <p className="text-sm font-semibold">{products.length} items found</p>
              <div className="flex items-center space-x-4">
                <div className="flex border rounded overflow-hidden shadow-sm">
                  <button 
                    onClick={() => setViewType('list')}
                    className={`p-2 transition-colors ${viewType === 'list' ? 'bg-gray-200' : 'bg-white hover:bg-gray-50'}`}
                  > ▤ </button>
                  <button 
                    onClick={() => setViewType('grid')}
                    className={`p-2 transition-colors ${viewType === 'grid' ? 'bg-gray-200' : 'bg-white hover:bg-gray-50'}`}
                  > ▦ </button>
                </div>
              </div>
            </div>

            {/* Grid View */}
            {viewType === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map(p => (
                  <div key={p._id} className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition flex flex-col text-black">
                    <div className="w-full aspect-square flex items-center justify-center mb-4 p-6 overflow-hidden bg-white">
                      <Link to={`/product/${p._id}`} className="w-full h-full flex items-center justify-center">
                        <img src={p.image} alt={p.name} className="max-h-full max-w-full object-contain cursor-pointer hover:scale-105 transition-transform" />
                      </Link>
                    </div>
                    <hr className="mb-4 opacity-50" />
                    <div className="flex justify-between items-start flex-1">
                      <div>
                        <span className="font-bold text-lg text-[#1C1C1C]">${p.price}</span>
                        <div className="text-orange-400 text-sm my-1"> ★★★★☆ </div>
                        <Link to={`/product/${p._id}`} className="hover:text-blue-600">
                          <p className="text-gray-600 text-sm leading-snug line-clamp-2 font-medium">{p.name}</p>
                        </Link>
                      </div>
                      <button className="text-blue-500 border p-2 rounded-md hover:bg-blue-50">❤️</button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* List View */
              <div className="space-y-3">
                {products.map(p => (
                  <div key={p._id} className="bg-white border rounded-lg p-4 flex flex-col md:flex-row space-x-0 md:space-x-6 hover:shadow-md transition text-black">
                    <div className="w-full md:w-48 h-48 flex items-center justify-center p-4 border rounded-md shrink-0 overflow-hidden bg-white">
                      <Link to={`/product/${p._id}`}>
                        <img src={p.image} alt={p.name} className="max-h-full max-w-full object-contain" />
                      </Link>
                    </div>
                    <div className="flex-1 mt-4 md:mt-0">
                      <div className="flex justify-between">
                        <Link to={`/product/${p._id}`} className="hover:text-blue-600">
                          <h3 className="text-lg font-bold text-gray-800">{p.name}</h3>
                        </Link>
                        <button className="text-blue-500 border p-2 rounded-md hover:bg-blue-50">❤️</button>
                      </div>
                      <span className="text-xl font-bold text-gray-900">${p.price}</span>
                      <p className="text-gray-500 text-sm mb-4 line-clamp-2">{p.description}</p>
                      <Link to={`/product/${p._id}`} className="text-blue-600 font-bold text-sm hover:underline"> View details </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Newsletter />
    </div>
  );
};

export default ProductList;