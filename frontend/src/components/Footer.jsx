import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      {/* Newsletter Section */}
      {/* Main Footer Links */}
      <div className="container mx-auto px-4 md:px-12 py-12">
        <div className="grid grid-cols-2 md:grid-cols-7 gap-8">
          
          {/* Brand & Social Section (Image 1 jaisa) */}
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-[#0D6EFD] p-1.5 rounded-lg text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              </div>
              <span className="text-2xl font-bold text-[#0D6EFD]">Brand</span>
            </div>
            <p className="text-[#505050] text-sm mb-6 leading-relaxed">
              Best information about the company gies here but now lorem ipsum is
            </p>
            
            {/* Social Icons with Links (Image 1 ki tarah) */}
            <div className="flex space-x-3">
              {[
                { name: 'fb', url: 'https://cdn-icons-png.flaticon.com/512/124/124010.png' },
                { name: 'tw', url: 'https://cdn-icons-png.flaticon.com/512/124/124021.png' },
                { name: 'ln', url: 'https://cdn-icons-png.flaticon.com/512/174/174857.png' },
                { name: 'in', url: 'https://cdn-icons-png.flaticon.com/512/174/174855.png' },
                { name: 'yt', url: 'https://cdn-icons-png.flaticon.com/512/174/174883.png' }
              ].map((icon, i) => (
                <div key={i} className="w-8 h-8 bg-[#BDC4CD] rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-500 transition overflow-hidden p-2">
                  <img src={icon.url} alt={icon.name} className="w-full h-full object-contain brightness-0 invert" />
                </div>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:ml-4 text-sm">
            <h4 className="font-bold mb-4 text-[#1C1C1C]">About</h4>
            <ul className="text-[#8B96A5] space-y-2">
              <li className="cursor-pointer">About Us</li><li className="cursor-pointer">Find store</li>
              <li className="cursor-pointer">Categories</li><li className="cursor-pointer">Blogs</li>
            </ul>
          </div>

          <div className="text-sm">
            <h4 className="font-bold mb-4 text-[#1C1C1C]">Partnership</h4>
            <ul className="text-[#8B96A5] space-y-2">
              <li className="cursor-pointer">About Us</li><li className="cursor-pointer">Find store</li>
              <li className="cursor-pointer">Categories</li><li className="cursor-pointer">Blogs</li>
            </ul>
          </div>

          <div className="text-sm">
            <h4 className="font-bold mb-4 text-[#1C1C1C]">Information</h4>
            <ul className="text-[#8B96A5] space-y-2">
              <li className="cursor-pointer">Help Center</li><li className="cursor-pointer">Money Refund</li>
              <li className="cursor-pointer">Shipping</li><li className="cursor-pointer">Contact us</li>
            </ul>
          </div>

          <div className="text-sm">
            <h4 className="font-bold mb-4 text-[#1C1C1C]">For users</h4>
            <ul className="text-[#8B96A5] space-y-2">
              <li className="cursor-pointer">Login</li><li className="cursor-pointer">Register</li>
              <li className="cursor-pointer">Settings</li><li className="cursor-pointer">My Orders</li>
            </ul>
          </div>

          {/* Get App (Image 2 jaisa logo ke sath) */}
          <div className="md:ml-4">
            <h4 className="font-bold mb-4 text-[#1C1C1C] text-sm">Get app</h4>
            <div className="space-y-2">
              {/* Apple Store Button */}
              <div className="bg-black text-white p-2 rounded-md flex items-center space-x-2 cursor-pointer w-[125px]">
                <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" alt="Apple" className="w-6 h-6 invert" />
                <div className="leading-none">
                  <p className="text-[7px] uppercase">Download on the</p>
                  <p className="text-[10px] font-bold">App Store</p>
                </div>
              </div>
              {/* Google Play Button */}
              <div className="bg-black text-white p-2 rounded-md flex items-center space-x-2 cursor-pointer w-[125px]">
                <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" alt="Google" className="w-6 h-6" />
                <div className="leading-none">
                  <p className="text-[7px] uppercase">Get it on</p>
                  <p className="text-[10px] font-bold">Google Play</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Final Copyright Bar */}
      <div className="bg-[#EFF2F4] border-t py-4 px-4 md:px-12 flex justify-between items-center text-sm text-[#606060]">
        <p>© 2023 Ecommerce.</p>
        <div className="flex items-center space-x-2 cursor-pointer">
          <img src="https://flagcdn.com/w20/us.png" alt="US" className="w-5 h-3" />
          <span>English (US) ▲</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;