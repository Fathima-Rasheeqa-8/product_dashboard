"use client";
import { useState } from "react";
import Layout from '../../Components/Layout'; // Ensure correct import path

export default function NewProduct() {
  const [title, setTitle] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Create a new product object
    const newProduct = {
      title,
      quantity,
      price
    };

    // Store the product in localStorage
    const existingProducts = JSON.parse(localStorage.getItem('products')) || []; // Get existing products or an empty array
    existingProducts.push(newProduct);
    localStorage.setItem('products', JSON.stringify(existingProducts));

    // Reset the form fields
    setTitle('');
    setQuantity('');
    setPrice('');

    // Display a success message (optional)
    alert('Product added successfully!');
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6 mt-10">
        <h1 className="text-blue-900 font-bold text-2xl text-center mb-6">Add New Product</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-blue-800 font-semibold mb-2">Product Name</label>
            <input 
              type="text" 
              placeholder="Enter product name" 
              className="border border-blue-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500 transition duration-300" 
              value={title} 
              onChange={ev => setTitle(ev.target.value)} 
            />
          </div>

          <div>
            <label className="block text-blue-800 font-semibold mb-2">Quantity</label>
            <input 
              type="number" 
              placeholder="Enter quantity"  
              className="border border-blue-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500 transition duration-300"
              value={quantity} 
              onChange={ev => setQuantity(ev.target.value)} 
            />
          </div>

          <div>
            <label className="block text-blue-800 font-semibold mb-2">Price</label>
            <input 
              type="number"  
              placeholder="Enter price"  
              className="border border-blue-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500 transition duration-300" 
              value={price} 
              onChange={ev => setPrice(ev.target.value)} 
            />
          </div>
         
          <button 
            type='submit'  
            className="w-full bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
            Save Product
          </button>
        </form>
      </div>
    </Layout>
  );
}
