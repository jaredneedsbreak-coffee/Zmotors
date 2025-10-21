import React from "react";
import PrimaryButton from "./PrimaryButton";

const Cards = ({ name, image, price, range, description, stock, onOrderClick }) => {
	return (
		<div className="bg-gray-800 rounded-xl shadow-lg w-80 p-6 flex flex-col items-center">
			<img src={image} alt={name} className="w-full h-48 object-cover rounded-lg mb-4" />
			<h2 className="text-2xl font-semibold mb-2">{name}</h2>
			<p className="text-yellow-400 font-bold mb-2">{price}</p>
			<p className="mb-2">Range: {range}</p>
			<p className="mb-2">Stock: <span className="font-semibold">{stock}</span></p>
			<p className="text-center text-gray-300 mb-4">{description}</p>
			<div className="flex gap-2 w-full">
				<button className="flex-1 bg-yellow-400 text-gray-900 font-bold px-4 py-2 rounded-full hover:bg-yellow-300 transition">View Details</button>
				<PrimaryButton className="flex-1" onClick={onOrderClick}>Order</PrimaryButton>
			</div>
		</div>
	);
};

export default Cards;
