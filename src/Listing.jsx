import React from "react";
import Cards from "./components/Cards";
import NavBar from "./components/NavBar";

const cars = [
	{
		id: 1,
		name: "Tesla Model 3",
		image: "https://images.unsplash.com/photo-1511391403515-ec7e7b2b8b1b?auto=format&fit=crop&w=600&q=80",
		price: "$38,990",
		range: "272 miles",
		description: "Popular all-electric sedan with advanced tech, autopilot, and fast charging."
	},
	{
		id: 2,
		name: "Nissan Leaf",
		image: "https://images.unsplash.com/photo-1549921296-3a4bfe3b1c8b?auto=format&fit=crop&w=600&q=80",
		price: "$28,140",
		range: "149 miles",
		description: "Affordable compact EV, great for city driving and short commutes."
	},
	{
		id: 3,
		name: "Chevrolet Bolt EV",
		image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=600&q=80",
		price: "$26,500",
		range: "259 miles",
		description: "Efficient hatchback with spacious interior and solid range."
	},
	{
		id: 4,
		name: "Hyundai Ioniq 5",
		image: "https://images.unsplash.com/photo-1622555067682-7e6c7b2e7e2b?auto=format&fit=crop&w=600&q=80",
		price: "$41,800",
		range: "303 miles",
		description: "Striking design, ultra-fast charging, and roomy cabin."
	},
	{
		id: 5,
		name: "Ford Mustang Mach-E",
		image: "https://images.unsplash.com/photo-1617814071584-2b1e6e7e7e2b?auto=format&fit=crop&w=600&q=80",
		price: "$42,995",
		range: "270 miles",
		description: "Sporty electric SUV with powerful performance and tech features."
	},
	{
		id: 6,
		name: "Volkswagen ID.4",
		image: "https://images.unsplash.com/photo-1617814071584-2b1e6e7e7e2b?auto=format&fit=crop&w=600&q=80",
		price: "$39,995",
		range: "275 miles",
		description: "Versatile electric SUV with comfortable ride and modern interior."
	},
	{
		id: 7,
		name: "Kia EV6",
		image: "https://images.unsplash.com/photo-1622555067682-7e6c7b2e7e2b?auto=format&fit=crop&w=600&q=80",
		price: "$42,600",
		range: "310 miles",
		description: "Stylish crossover EV with fast charging and advanced safety."
	}
];

const Listing = () => {
	return (
		<div className="min-h-screen bg-gray-900 text-white flex flex-col">
			<NavBar />
			<div className="py-16 px-4 flex-1">
				<h1 className="text-4xl font-bold text-center mb-10">Available Cars</h1>
				<div className="flex flex-wrap justify-center gap-10">
					{cars.map(car => (
						<Cards
							key={car.id}
							name={car.name}
							image={car.image}
							price={car.price}
							range={car.range}
							description={car.description}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Listing;
