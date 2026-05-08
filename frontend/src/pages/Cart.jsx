import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import DiscountBanner from '../components/DiscountBanner';

const Cart = () => {
  // 🟢 clearCart ko yahan extract kiya taake button par use ho sakay
  const { cart, removeFromCart, clearCart } = useCart();

  // Price Calculation Logic
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const discount = cart.length > 0 ? 60 : 0;
  const tax = cart.length > 0 ? 14 : 0;
  const total = subtotal > 0 ? (subtotal - discount + tax) : 0;

  // Dummy Data for "Saved for later" images
  const savedItems = [
    { id: 1, price: 99.50, name: "GoPro HERO6 4K Action Camera - Black", img: "/images/items/kit.png" },
    { id: 2, price: 99.50, name: "GoPro HERO6 4K Action Camera - Black", img: "/images/items/w.png" },
    { id: 3, price: 99.50, name: "GoPro HERO6 4K Action Camera - Black", img: "/images/items/lamp.png" },
    { id: 4, price: 99.50, name: "GoPro HERO6 4K Action Camera - Black", img: "/images/items/c.png" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-10">
      <div className="container mx-auto px-4 md:px-12 py-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">My cart ({cart.length})</h2>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* LEFT: Cart Items List */}
          <div className="lg:w-3/4">
            <div className="bg-white border rounded-lg p-6 shadow-sm text-black">
              {cart.length === 0 ? (
                <div className="text-center py-10">
                  <p className="text-gray-500 mb-4">Your cart is empty!</p>
                  <Link to="/products" className="text-blue-600 font-bold underline">Go Shopping</Link>
                </div>
              ) : (
                cart.map((item, index) => (
                  <div key={item._id} className={`flex flex-col md:flex-row gap-4 py-6 ${index !== cart.length - 1 ? 'border-b' : ''}`}>
                    <div className="w-24 h-24 border rounded-md p-2 shrink-0 flex items-center justify-center bg-white">
                      <img src={item.image} alt={item.name} className="max-h-full object-contain" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium text-gray-800 mb-1">{item.name}</h4>
                          <p className="text-sm text-gray-400">Category: {item.category}</p>
                          <div className="flex gap-3 mt-3">
                            <button 
                              onClick={() => removeFromCart(item._id)}
                              className="text-red-500 border border-red-100 px-3 py-1 rounded-md text-xs font-medium hover:bg-red-50"
                            >Remove</button>
                            <button className="text-blue-600 border border-blue-100 px-3 py-1 rounded-md text-xs font-medium hover:bg-blue-50">Save for later</button>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-gray-800 mb-4">${item.price}</p>
                          <p className="text-sm text-gray-500">Qty: {item.qty}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
              
              <div className="flex justify-between mt-6 pt-6 border-t">
                <Link to="/products" className="bg-blue-600 text-white px-6 py-2 rounded-md font-bold flex items-center gap-2 text-sm shadow-md hover:bg-blue-700 transition">
                  <span>←</span> Back to shop
                </Link>
                {cart.length > 0 && (
                   <button 
                    onClick={clearCart} // 🟢 Function connect kar diya gaya hai
                    className="text-blue-600 border border-gray-200 px-4 py-2 rounded-md text-sm font-medium hover:bg-red-50 hover:text-red-600 transition"
                   >
                    Remove all
                   </button>
                )}
              </div>
            </div>

            {/* Features Badges */}
            <div className="flex flex-wrap gap-10 mt-8">
               <div className="flex items-center gap-3">
                  <div className="bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center text-gray-600 text-lg">🛡️</div>
                  <p className="text-xs text-gray-500 w-24">Secure payment</p>
               </div>
               <div className="flex items-center gap-3">
                  <div className="bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center text-gray-600 text-lg">💬</div>
                  <p className="text-xs text-gray-500 w-24">Customer support</p>
               </div>
               <div className="flex items-center gap-3">
                  <div className="bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center text-gray-600 text-lg">🚚</div>
                  <p className="text-xs text-gray-500 w-24">Free delivery</p>
               </div>
            </div>
          </div>

          {/* RIGHT: Summary */}
          <div className="lg:w-1/4 flex flex-col gap-4">
            <div className="bg-white border rounded-lg p-4 shadow-sm text-black">
               <p className="text-sm text-gray-600 mb-2">Have a coupon?</p>
               <div className="flex border rounded-md overflow-hidden">
                  <input type="text" placeholder="Add coupon" className="w-full p-2 text-sm outline-none" />
                  <button className="bg-white border-l text-blue-600 px-4 py-2 text-sm font-bold hover:bg-gray-50">Apply</button>
               </div>
            </div>

            <div className="bg-white border rounded-lg p-6 shadow-sm text-black">
              <div className="space-y-3 text-sm border-b pb-4">
                <div className="flex justify-between text-gray-500"><span>Subtotal:</span> <span>${subtotal.toFixed(2)}</span></div>
                <div className="flex justify-between text-red-500"><span>Discount:</span> <span>-${discount.toFixed(2)}</span></div>
                <div className="flex justify-between text-green-500"><span>Tax:</span> <span>+${tax.toFixed(2)}</span></div>
              </div>
              <div className="flex justify-between font-bold text-lg my-4 text-gray-800">
                <span>Total:</span> <span>${total > 0 ? total.toFixed(2) : "0.00"}</span>
              </div>
              <button className="w-full bg-green-600 text-white py-3 rounded-md font-bold text-lg hover:bg-green-700 transition shadow-lg">
                Checkout
              </button>
              
              {/* Payment Icons */}
              <div className="flex justify-center gap-4 mt-6">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-4" alt="visa" />
                 <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-6" alt="master" />
                 <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-5" alt="paypal" />
                 <img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg" className="h-5 opacity-70" alt="applepay" />
              </div>
            </div>
          </div>
        </div>

        {/* Saved for Later Section */}
        <div className="mt-12 bg-white border rounded-lg p-6 shadow-sm text-black">
           <h3 className="text-lg font-bold mb-6 text-gray-800">Saved for later</h3>
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {savedItems.map((item) => (
                <div key={item.id} className="group">
                   <div className="aspect-square border rounded-md p-4 mb-2 bg-white flex items-center justify-center hover:shadow-md transition">
                      <img src={item.img} alt="saved" className="max-h-full object-contain" />
                   </div>
                   <p className="font-bold text-gray-800">${item.price.toFixed(2)}</p>
                   <p className="text-xs text-gray-500 line-clamp-2 mt-1">{item.name}</p>
                   <button className="mt-3 text-blue-600 border border-blue-100 px-3 py-1 rounded-md text-xs font-medium flex items-center gap-2 hover:bg-blue-600 hover:text-white transition">
                      🛒 Move to cart
                   </button>
                </div>
              ))}
           </div>
        </div>

        <DiscountBanner />
      </div>
    </div>
  );
};

export default Cart;