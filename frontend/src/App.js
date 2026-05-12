import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import { CartProvider } from './context/CartContext'; // Import karein
import { AuthProvider } from './context/AuthContext';
import Signup from './pages/Signup';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <AuthProvider>
    <CartProvider>
    <Router>
      <div className="bg-[#F7FAFC] min-h-screen font-sans flex flex-col">
        {/* Navbar hamesha top par rahega */}
        <Navbar />
        
        {/* Main Content Area */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            {/* 🟢 Dynamic Route for Product Details */}
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </div>

        {/* Footer hamesha bottom par rahega */}
        <Footer />
      </div>
    </Router>
    </CartProvider>
    </AuthProvider>
  );
}

export default App;