import React from "react";

const Cards = ({ name, image, price, range, description }) => {
	return (
		<div className="bg-gray-800 rounded-xl shadow-lg w-80 p-6 flex flex-col items-center">
			<img src={image} alt={name} className="w-full h-48 object-cover rounded-lg mb-4" />
			<h2 className="text-2xl font-semibold mb-2">{name}</h2>
			<p className="text-yellow-400 font-bold mb-2">{price}</p>
			<p className="mb-2">Range: {range}</p>
			<p className="text-center text-gray-300 mb-4">{description}</p>
			<button className="bg-yellow-400 text-gray-900 font-bold px-6 py-2 rounded-full hover:bg-yellow-300 transition">View Details</button>
		</div>
	);
};

export default Cards;
