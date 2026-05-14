import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../context/CartContext';
import ProductTabs from '../components/ProductTabs';
import YouMayLike from '../components/YouMayLike';
import RelatedProducts from '../components/RelatedProducts';
import DiscountBanner from '../components/DiscountBanner';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [allProducts, setAllProducts] = useState([]); // 🟢 Baqi products ke liye
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 1. Current product fetch karein
        const res1 = await axios.get(`https://hospitable-transformation-production-904d.up.railway.app/api/products/${id}`);
        setProduct(res1.data);

        // 2. Saare products fetch karein (Related/Suggestion ke liye)
        const res2 = await axios.get('https://hospitable-transformation-production-904d.up.railway.app/api/products');
        setAllProducts(res2.data);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) return <div className="text-center py-20 text-black">Loading...</div>;
  if (!product) return <div className="text-center py-20 text-black">Product not found!</div>;

  return (
    <div className="bg-gray-50 min-h-screen pb-10">
      <div className="container mx-auto px-4 md:px-12 py-6 text-black">
        
        {/* Breadcrumb */}
        <div className="text-gray-400 text-sm mb-4">
          Home {'>'} {product.category} {'>'} {product.name}
        </div>

        {/* Main Section: Product Info + Supplier */}
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Left + Middle: Product Detail Box */}
          <div className="lg:w-3/4">
            <div className="bg-white border rounded-lg p-6 shadow-sm flex flex-col md:flex-row gap-8">
              {/* Left: Image */}
              <div className="md:w-1/3">
                <div className="border rounded-lg p-4 flex justify-center h-80 bg-white">
                  <img src={product.image} alt={product.name} className="h-full object-contain" />
                </div>
              </div>

              {/* Middle: Info */}
              <div className="md:w-2/3">
                <p className="text-green-500 text-sm font-medium">✓ {product.stock > 0 ? 'In Stock' : 'Out of Stock'}</p>
                <h1 className="text-xl font-bold mt-2 text-gray-900">{product.name}</h1>
                
                <div className="flex items-center gap-4 my-3 text-sm">
                  <div className="text-orange-400">★★★★☆ <span className="text-orange-500 ml-1">9.3</span></div>
                  <div className="text-gray-400">• 32 reviews • 154 sold</div>
                </div>

                <div className="bg-[#FFF0DF] p-4 flex gap-8 mb-6 rounded">
                  <div>
                    <p className="text-red-500 font-bold text-xl">${product.price}</p>
                    <p className="text-xs text-gray-500">Free Shipping</p>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-6">{product.description}</p>
                
                <button 
                  onClick={() => addToCart(product)}
                  className="bg-blue-600 text-white px-8 py-2 rounded-md font-bold hover:bg-blue-700 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>

            {/* 🟢 1. Product Tabs Section (Description, Reviews etc) */}
            <ProductTabs description={product.description} />
          </div>

          {/* Right Section: Supplier + Suggestions */}
          <div className="lg:w-1/4 space-y-6">
            {/* Supplier Card */}
            <div className="border rounded-lg p-4 shadow-sm bg-white">
               <p className="font-medium text-gray-900 mb-2">Supplier</p>
               <p className="text-sm text-gray-600">Guanjoi Trading LLC</p>
               <button className="w-full bg-blue-600 text-white py-2 rounded-md mt-4 text-sm font-bold">Send inquiry</button>
            </div>

            {/* 🟢 2. You May Like Section */}
            <YouMayLike products={allProducts} />
          </div>
        </div>

        {/* 🟢 3. Related Products Section (Full Width) */}
        <RelatedProducts products={allProducts} />
           <DiscountBanner />

      </div>
    </div>
  );
};

export default ProductDetail;