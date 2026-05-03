import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = [
    { id: 1, name: "T-shirts with multiple colors, for men and lady", price: 78.99, size: "medium", color: "blue", material: "Plastic", seller: "Artel Market", qty: 9, img: "/images/t.png" },
    { id: 2, name: "T-shirts with multiple colors, for men and lady", price: 39.00, size: "medium", color: "blue", material: "Plastic", seller: "Best factory LLC", qty: 3, img: "/images/bag.png" },
    { id: 3, name: "T-shirts with multiple colors, for men and lady", price: 170.50, size: "medium", color: "blue", material: "Plastic", seller: "Artel Market", qty: 1, img: "/images/items/lamp.png" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-10">
      <div className="container mx-auto px-4 md:px-12 py-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">My cart (3)</h2>

        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* LEFT: Cart Items List */}
          <div className="lg:w-3/4">
            <div className="bg-white border rounded-lg p-6 shadow-sm">
              {cartItems.map((item, index) => (
                <div key={item.id} className={`flex flex-col md:flex-row gap-4 py-6 ${index !== cartItems.length - 1 ? 'border-b' : ''}`}>
                  <div className="w-24 h-24 border rounded-md p-2 shrink-0 flex items-center justify-center">
                    <img src={item.img} alt={item.name} className="max-h-full" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">{item.name}</h4>
                        <p className="text-sm text-gray-400">Size: {item.size}, Color: {item.color}, Material: {item.material}</p>
                        <p className="text-sm text-gray-400">Seller: {item.seller}</p>
                        <div className="flex gap-3 mt-3">
                          <button className="text-red-500 border border-gray-200 px-3 py-1 rounded-md text-xs font-medium hover:bg-red-50">Remove</button>
                          <button className="text-blue-600 border border-gray-200 px-3 py-1 rounded-md text-xs font-medium hover:bg-blue-50">Save for later</button>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-800 mb-4">${item.price}</p>
                        <select className="border border-gray-200 p-2 rounded-md text-sm outline-none bg-white">
                          <option>Qty: {item.qty}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="flex justify-between mt-6 pt-6 border-t">
                <Link to="/products" className="bg-blue-600 text-white px-6 py-2 rounded-md font-bold flex items-center gap-2">
                  <span>←</span> Back to shop
                </Link>
                <button className="text-blue-600 border border-gray-200 px-6 py-2 rounded-md font-bold hover:bg-gray-50">Remove all</button>
              </div>
            </div>

            {/* Bottom Service Badges */}
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">🔒</div>
                <div className="text-xs">
                  <p className="font-bold text-gray-700">Secure payment</p>
                  <p className="text-gray-400">Have you ever finally just</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">💬</div>
                <div className="text-xs">
                  <p className="font-bold text-gray-700">Customer support</p>
                  <p className="text-gray-400">Have you ever finally just</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">🚚</div>
                <div className="text-xs">
                  <p className="font-bold text-gray-700">Free delivery</p>
                  <p className="text-gray-400">Have you ever finally just</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Summary & Coupon */}
          <div className="lg:w-1/4 flex flex-col gap-4">
            <div className="bg-white border rounded-lg p-4 shadow-sm">
              <p className="text-sm text-gray-500 mb-2">Have a coupon?</p>
              <div className="flex border rounded-md overflow-hidden">
                <input type="text" placeholder="Add coupon" className="p-2 text-sm w-full outline-none" />
                <button className="border-l px-4 py-2 text-blue-600 font-bold hover:bg-gray-50">Apply</button>
              </div>
            </div>

            <div className="bg-white border rounded-lg p-6 shadow-sm">
              <div className="space-y-3 text-sm border-b pb-4">
                <div className="flex justify-between text-gray-500"><span>Subtotal:</span> <span>$1403.97</span></div>
                <div className="flex justify-between text-red-500"><span>Discount:</span> <span>- $60.00</span></div>
                <div className="flex justify-between text-green-500"><span>Tax:</span> <span>+ $14.00</span></div>
              </div>
              <div className="flex justify-between font-bold text-lg my-4 text-gray-800">
                <span>Total:</span> <span>$1357.97</span>
              </div>
              <button className="w-full bg-green-600 text-white py-3 rounded-md font-bold text-lg hover:bg-green-700 transition shadow-md">
                Checkout
              </button>
              <div className="flex justify-center gap-2 mt-4">
                <img src="https://cdn-icons-png.flaticon.com/512/196/196070.png" alt="Visa" className="h-4" />
                <img src="https://cdn-icons-png.flaticon.com/512/196/196081.png" alt="Mastercard" className="h-4" />
                <img src="https://cdn-icons-png.flaticon.com/512/196/196072.png" alt="Paypal" className="h-4" />
              </div>
            </div>
          </div>
        </div>

        {/* SAVED FOR LATER SECTION */}
        <div className="mt-12 bg-white border rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-bold mb-6 text-gray-800">Saved for later</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="group">
                <div className="bg-gray-100 rounded-lg p-4 mb-3 flex items-center justify-center h-48">
                  <img src={`/images/w.png`} alt="saved" className="max-h-full object-contain" />
                </div>
                <p className="font-bold text-gray-800">$99.50</p>
                <p className="text-sm text-gray-500 mt-1 leading-snug line-clamp-2">GoPro HERO6 4K Action Camera - Black</p>
                <button className="mt-3 flex items-center gap-2 text-blue-600 border border-gray-200 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-50">
                  <span>🛒</span> Move to cart
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* BLUE DISCOUNT BANNER */}
        <div className="bg-[#0067FF] rounded-lg p-8 mt-12 flex flex-col md:flex-row justify-between items-center text-white relative overflow-hidden shadow-lg">
          <div className="absolute right-0 top-0 h-full w-1/4 bg-blue-500 skew-x-[-20deg] translate-x-12 opacity-30"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold">Super discount on more than 100 USD</h2>
            <p className="opacity-90 mt-1">Have you ever finally just write dummy info</p>
          </div>
          <button className="relative z-10 bg-[#FF9017] hover:bg-orange-600 text-white px-8 py-2.5 rounded-md font-bold transition-all shadow-md mt-6 md:mt-0">
            Shop now
          </button>
        </div>

      </div>
    </div>
  );
};

export default Cart;