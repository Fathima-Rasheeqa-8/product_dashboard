"use client";
import { useState, useEffect } from 'react';
import Layout from "../Components/Layout";
import Link from 'next/link';

export default function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
  }, []);

  const handleDelete = (title) => {
    const updatedProducts = products.filter(product => product.title !== title);
    setProducts(updatedProducts); // Update the state
    localStorage.setItem('products', JSON.stringify(updatedProducts)); // Update localStorage
  };

  return (
    <Layout>
      <div className="flex justify-center mt-4">
        <Link 
          className="bg-blue-900 text-white rounded-md py-1 px-2 hover:bg-blue-700 transition-colors duration-200 mt-5" 
          href={'/product/new'}>
          Add New Product
        </Link>
      </div>

      <div className="mt-4">
        {products.length > 0 ? (
          <table className="w-3/4 max-w-2xl mx-auto border-collapse border border-gray-300 shadow-lg mt-20">

            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="border border-gray-300 px-4 py-2 text-left">Product Name</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Quantity</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Price</th>
                <th className="border border-gray-300 px-4 py-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.title} className="hover:bg-gray-100 transition duration-300">
                  <td className="border border-gray-300 px-4 py-2">{product.title}</td>
                  <td className="border border-gray-300 px-4 py-2">{product.quantity}</td>
                  <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">₹{product.price}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <button 
                      onClick={() => handleDelete(product.title)} 
                      className="text-red-600 hover:text-red-700 transition duration-300 transform hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No products available yet.</p>
        )}
      </div>
    </Layout>
  );
}
