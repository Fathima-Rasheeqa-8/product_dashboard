"use client";
import { useState, useEffect } from 'react';
import Layout from "./Components/Layout";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [highestPricedProduct, setHighestPricedProduct] = useState(null);
  const [lowestPricedProduct, setLowestPricedProduct] = useState(null);
  const [averagePrice, setAveragePrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);

    if (storedProducts.length > 0) {
      setTotalProducts(storedProducts.length);

      const totalPriceValue = storedProducts.reduce((sum, product) => sum + Number(product.price), 0);
      setTotalPrice(totalPriceValue);

      const totalQuantityValue = storedProducts.reduce((sum, product) => sum + Number(product.quantity), 0);
      setTotalQuantity(totalQuantityValue);

      const highestPrice = Math.max(...storedProducts.map(product => Number(product.price)));
      setHighestPricedProduct(storedProducts.find(product => Number(product.price) === highestPrice));

      const lowestPrice = Math.min(...storedProducts.map(product => Number(product.price)));
      setLowestPricedProduct(storedProducts.find(product => Number(product.price) === lowestPrice));

      const averagePriceValue = totalPriceValue / storedProducts.length;
      setAveragePrice(averagePriceValue);
    }
  }, []);

  return (
    <Layout>
      <div className="text-blue-900">
        <h1 className="text-3xl font-bold mb-6 text-center mt-5">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-md mx-auto">
  
        <div className="bg-green-100 p-4 rounded-md shadow-md text-center hover:bg-green-200 transition duration-300 ease-in-out transform hover:scale-105">
          <h2 className="text-lg font-bold text-green-700">Total Products</h2>
          <p className="text-2xl font-semibold text-green-900 focus:outline-none focus:bg-green-300 focus:text-white">
            {totalProducts}
          </p>
        </div>

          {/* Total Price */}
          <div className="bg-blue-100 p-4 rounded-md shadow-md text-center hover:bg-blue-200 transition duration-300 ease-in-out transform hover:scale-105">
            <h2 className="text-lg font-bold text-blue-700">Total Price</h2>
            <p className="text-2xl font-semibold text-blue-900 focus:outline-none focus:bg-blue-300 focus:text-white">
              ₹{totalPrice}
            </p>
          </div>

          {/* Total Quantity */}
          <div className="bg-purple-100 p-4 rounded-md shadow-md text-center hover:bg-purple-200 transition duration-300 ease-in-out transform hover:scale-105">
            <h2 className="text-lg font-bold text-purple-700">Total Quantity</h2>
            <p className="text-2xl font-semibold text-purple-900 focus:outline-none focus:bg-purple-300 focus:text-white">
              {totalQuantity}
            </p>
          </div>

          {/* Average Price */}
          <div className="bg-yellow-100 p-4 rounded-md shadow-md text-center hover:bg-yellow-200 transition duration-300 ease-in-out transform hover:scale-105">
            <h2 className="text-lg font-bold text-yellow-700">Average Price</h2>
            <p className="text-2xl font-semibold text-yellow-900 focus:outline-none focus:bg-yellow-300 focus:text-white">
              ₹{averagePrice.toFixed(2)}
            </p>
          </div>

          {/* Highest Priced Product */}
          {highestPricedProduct && (
            <div className="bg-red-100 p-4 rounded-md shadow-md text-center hover:bg-red-200 transition duration-300 ease-in-out transform hover:scale-105">
              <h2 className="text-lg font-bold text-red-700">Highest Priced Product</h2>
              <p className="text-xl text-red-900 focus:outline-none focus:bg-red-300 focus:text-white">
                {highestPricedProduct.title} (₹{highestPricedProduct.price})
              </p>
            </div>
          )}
          {lowestPricedProduct && (
            <div className="bg-teal-100 p-4 rounded-md shadow-md text-center hover:bg-teal-200 transition duration-300 ease-in-out transform hover:scale-105">
              <h2 className="text-lg font-bold text-teal-700">Lowest Priced Product</h2>
              <p className="text-xl text-teal-900 focus:outline-none focus:bg-teal-300 focus:text-white">
                {lowestPricedProduct.title} (₹{lowestPricedProduct.price})
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
