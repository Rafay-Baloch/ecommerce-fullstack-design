import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
      <div className="bg-[#F7FAFC] min-h-screen font-sans">
        {/* Navbar fixed rahega */}
        <Navbar />
        
        <Routes>
          {/* Default page Home show hoga */}
          <Route path="/" element={<Home />} />
          
          {/* /products par Product List show hoga */}
          <Route path="/products" element={<ProductList />} />
          <Route path="/product-detail" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

        {/* Footer fixed rahega */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;