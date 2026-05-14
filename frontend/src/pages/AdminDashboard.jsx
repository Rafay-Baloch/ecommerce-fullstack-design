import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  
  const [productToDelete, setProductToDelete] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProductId, setCurrentProductId] = useState(null);
  const [formData, setFormData] = useState({ name: '', price: '', category: '', image: '', description: '' });

  useEffect(() => {
    if (!user || !user.isAdmin) { navigate('/'); } else { fetchProducts(); }
  }, [user, navigate]);

  const fetchProducts = async () => {
    const { data } = await axios.get('https://hospitable-transformation-production-904d.up.railway.app/api/products');
    setProducts(data);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) { setFormData({ ...formData, image: `/images/${file.name}` }); }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = { headers: { Authorization: `Bearer ${user.token}` } };
    try {
      if (isEditing) {
      await axios.put(
  `https://hospitable-transformation-production-904d.up.railway.app/api/products/${currentProductId}`,
  formData,
  config
);
} else {
  await axios.post(
    'https://hospitable-transformation-production-904d.up.railway.app/api/products',
    formData,
    config
  );
}
      closeModal();
      fetchProducts();
    } catch (error) { alert('Operation failed'); }
  };

  const openEditModal = (product) => {
    setIsEditing(true);
    setCurrentProductId(product._id);
    setFormData({ name: product.name, price: product.price, category: product.category, image: product.image, description: product.description });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setIsEditing(false);
    setFormData({ name: '', price: '', category: '', image: '', description: '' });
  };

  return (
    <div className="flex h-screen bg-[#F3F4F6] font-sans text-slate-900 overflow-hidden">
      
      {/* 🟢 FIXED SIDEBAR (Content Hidden on Close) */}
      <div className={`${isSidebarOpen ? 'w-72' : 'w-0'} transition-all duration-300 bg-[#0F172A] text-white flex flex-col shadow-2xl h-full fixed lg:relative z-[100]`}>
        {/* Is condition se sidebar ka content band hone par hide ho jayega */}
        {isSidebarOpen && (
          <div className="flex flex-col h-full animate-in fade-in duration-300">
            <div className="p-8 flex items-center space-x-4 border-b border-slate-800 shrink-0">
              <div className="bg-white/10 p-2 rounded-full border border-white/20">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h2 className="text-xl font-black tracking-tight whitespace-nowrap uppercase italic">Brand Admin</h2>
            </div>
            
            <nav className="flex-1 p-6 space-y-4 overflow-y-auto">
              <div className="flex items-center space-x-4 bg-blue-600 p-4 rounded-2xl cursor-pointer shadow-lg">
                <span className="text-xl">🛒</span> <span className="font-bold">Products</span>
              </div>
              {['Users', 'Orders', 'Settings'].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-4 p-4 text-slate-400 hover:bg-slate-800 hover:text-white rounded-2xl cursor-pointer transition-all">
                  <span className="text-xl">{idx === 0 ? '👥' : idx === 1 ? '📑' : '⚙️'}</span>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>

      {/* 🔵 MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        
        {/* FIXED TOP HEADER */}
        <div className="bg-white px-10 py-6 flex justify-between items-center border-b z-50 shrink-0">
          <div className="flex items-center space-x-4">
             <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="text-2xl text-slate-400 hover:text-blue-600 transition p-2 hover:bg-slate-50 rounded-lg">
               ☰
             </button>
             <h1 className="text-2xl font-black text-slate-800 tracking-tight">Inventory Control</h1>
          </div>
          <button onClick={() => setShowModal(true)} className="bg-blue-600 text-white px-8 py-3 rounded-2xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all">
            + New Product
          </button>
        </div>

        {/* 📜 SCROLLABLE PRODUCT LIST */}
        <div className="p-10 overflow-y-auto flex-1 custom-scrollbar">
          <div className="bg-white rounded-[32px] shadow-sm border border-gray-100 overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-slate-50/50 sticky top-0 z-10 border-b">
                <tr>
                  <th className="p-6 text-xs font-bold text-slate-400 uppercase tracking-widest text-left">Product Info</th>
                  <th className="p-6 text-xs font-bold text-slate-400 uppercase tracking-widest text-left">Category</th>
                  <th className="p-6 text-xs font-bold text-slate-400 uppercase tracking-widest text-left">Pricing</th>
                  <th className="p-6 text-center text-xs font-bold text-slate-400 uppercase tracking-widest">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {products.map((product) => (
                  <tr key={product._id} className="hover:bg-blue-50/20 transition-colors group">
                    <td className="p-6">
                      <div className="flex items-center space-x-4">
                        <img src={product.image} className="w-14 h-14 rounded-2xl object-cover shadow-sm border border-gray-100 group-hover:scale-110 transition duration-300" alt={product.name} />
                        <span className="font-bold text-slate-700">{product.name}</span>
                      </div>
                    </td>
                    <td className="p-6"><span className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider">{product.category}</span></td>
                    <td className="p-6 font-black text-slate-900">${product.price}</td>
                    <td className="p-6 text-center">
                      <div className="flex justify-center space-x-3">
                        <button onClick={() => openEditModal(product)} className="bg-amber-50 text-amber-600 p-3 rounded-xl hover:bg-amber-100 hover:scale-110 transition-all shadow-sm">✏️</button>
                        <button onClick={() => { setProductToDelete(product._id); setShowDeleteModal(true); }} className="bg-red-50 text-red-600 p-3 rounded-xl hover:bg-red-100 hover:scale-110 transition-all shadow-sm">🗑️</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* DELETE MODAL */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md flex items-center justify-center z-[200] p-4">
          <div className="bg-white rounded-[40px] p-12 max-w-sm w-full text-center shadow-2xl">
            <div className="w-24 h-24 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-5xl mx-auto mb-8 animate-bounce">⚠️</div>
            <h2 className="text-3xl font-black mb-3 text-slate-800 tracking-tight">Confirm?</h2>
            <p className="text-slate-500 mb-10 leading-relaxed font-medium">This product will be permanently deleted from your store.</p>
            <div className="flex space-x-4">
              <button onClick={() => setShowDeleteModal(false)} className="flex-1 py-4 rounded-2xl font-bold text-slate-400 bg-slate-50 hover:bg-slate-100 transition-all">Cancel</button>
              <button onClick={async () => {
                 const config = { headers: { Authorization: `Bearer ${user.token}` } };
                 await axios.delete(
                                `https://hospitable-transformation-production-904d.up.railway.app/api/products/${productToDelete}`,
                               config
                                        );
                 setShowDeleteModal(false); fetchProducts();
              }} className="flex-1 py-4 rounded-2xl font-bold text-white bg-red-500 hover:bg-red-600 shadow-xl shadow-red-200 transition-all">Delete</button>
            </div>
          </div>
        </div>
      )}

      {/* ADD/EDIT MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md flex items-center justify-center z-[200] p-4">
          <div className="bg-white rounded-[48px] w-full max-w-xl p-12 shadow-2xl border border-white">
            <h2 className="text-4xl font-black mb-10 text-slate-800 tracking-tighter">{isEditing ? 'Update Item' : 'New Product'}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="text" placeholder="Product Name" className="w-full bg-slate-50 border-none p-5 rounded-3xl outline-none focus:ring-4 focus:ring-blue-100 transition-all" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
              <div className="grid grid-cols-2 gap-6">
                <input type="number" placeholder="Price" className="w-full bg-slate-50 border-none p-5 rounded-3xl outline-none focus:ring-4 focus:ring-blue-100 transition-all" value={formData.price} onChange={(e) => setFormData({...formData, price: e.target.value})} required />
                <input type="text" placeholder="Category" className="w-full bg-slate-50 border-none p-5 rounded-3xl outline-none focus:ring-4 focus:ring-blue-100 transition-all" value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})} required />
              </div>
              <div className="flex items-center bg-slate-50 rounded-3xl p-5 border-2 border-dashed border-slate-200 hover:border-blue-400 transition-colors">
                <input type="file" id="imageInput" className="hidden" onChange={handleImageChange} />
                <label htmlFor="imageInput" className="cursor-pointer font-bold text-blue-600 w-full text-center">
                  {formData.image ? `Selected: ${formData.image}` : '📁 Choose Product Image'}
                </label>
              </div>
              <textarea placeholder="Description" className="w-full bg-slate-50 border-none p-5 rounded-3xl outline-none focus:ring-4 focus:ring-blue-100 transition-all" rows="3" value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} required></textarea>
              <div className="flex space-x-6 pt-6">
                <button type="button" onClick={closeModal} className="flex-1 py-4 font-black text-slate-400 hover:text-slate-600 transition-all">Discard</button>
                <button type="submit" className="flex-[2] bg-blue-600 text-white py-5 rounded-3xl font-black shadow-2xl shadow-blue-100 hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;