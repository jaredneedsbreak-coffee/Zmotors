import React, { useState } from "react";
import PrimaryButton from "./components/PrimaryButton";

const Form = ({ car, onSubmit, onCancel }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, quantity, car });
  };

  if (!car) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 w-full max-w-md shadow-lg relative">
        <button type="button" onClick={onCancel} className="absolute top-2 right-4 text-gray-500 text-2xl">&times;</button>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Order {car.name}</h2>
        <div className="mb-4">
          <label className="block text-gray-800 mb-1">Your Name</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 placeholder-gray-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-800 mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 placeholder-gray-500"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-800 mb-1">Quantity</label>
          <input
            type="number"
            min={1}
            max={car.stock}
            value={quantity}
            onChange={e => setQuantity(Number(e.target.value))}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 placeholder-gray-500"
          />
        </div>
        <PrimaryButton type="submit" className="w-full">Place Order</PrimaryButton>
      </form>
    </div>
  );
};

export default Form;
