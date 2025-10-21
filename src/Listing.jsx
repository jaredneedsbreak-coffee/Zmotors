import React from "react";
import Cards from "./components/Cards";
import NavBar from "./components/NavBar";

const cars = [
	{
		id: 1,
		name: "1970 Dodge Charger",
		image: require("./images/1970 Dodge Charger.jpg"),
		price: "$75,000",
		range: "Classic Muscle",
		description: "Iconic American muscle car, famous for its power and classic design."
	},
	{
		id: 2,
		name: "Bugatti Chiron",
		image: require("./images/buggati chiron.jpg"),
		price: "$3,000,000",
		range: "261 mph top speed",
		description: "One of the fastest and most luxurious hypercars in the world."
	},
	{
		id: 3,
		name: "Dodge Challenger",
		image: require("./images/dodge challenger.jpg"),
		price: "$32,000",
		range: "Modern Muscle",
		description: "A modern take on the classic muscle car, known for its aggressive styling."
	},
	{
		id: 4,
		name: "Dodge Ram",
		image: require("./images/dodge ram.jpg"),
		price: "$40,000",
		range: "Pickup Truck",
		description: "Powerful and reliable pickup, perfect for work and play."
	},
	{
		id: 5,
		name: "Nissan GT-R R35",
		image: require("./images/gtr r35.jpg"),
		price: "$115,000",
		range: "565 hp",
		description: "Japanese supercar with advanced technology and blistering speed."
	},
	{
		id: 6,
		name: "Lamborghini Aventador SVJ",
		image: require("./images/Lamborghini Aventador SVJ .jpg"),
		price: "$517,000",
		range: "759 hp",
		description: "Extreme performance and dramatic styling from Lamborghini."
	},
	{
		id: 7,
		name: "Lamborghini Huracan",
		image: require("./images/lamborghini huracan.jpg"),
		price: "$249,000",
		range: "631 hp",
		description: "Exotic supercar with a V10 engine and stunning looks."
	},
	{
		id: 8,
		name: "Lamborghini Revuelto",
		image: require("./images/lamorghini ruvuelto.jpg"),
		price: "$600,000",
		range: "1001 hp (hybrid)",
		description: "Lamborghini's latest hybrid supercar, combining power and efficiency."
	},
	{
		id: 9,
		name: "Nissan Skyline R33 GTR",
		image: require("./images/Nissan Skyline R33 GTR.jpg"),
		price: "$80,000",
		range: "276 hp",
		description: "Legendary JDM car, loved for its performance and tuning potential."
	},
	{
		id: 10,
		name: "Porsche 911",
		image: require("./images/porsche 911.jpg"),
		price: "$114,400",
		range: "379 hp",
		description: "Timeless sports car, renowned for its handling and engineering."
	},
	{
		id: 11,
		name: "Toyota Supra MK4",
		image: require("./images/supra mk4.jpg"),
		price: "$90,000",
		range: "276 hp (stock)",
		description: "Cult classic, famous for its tuning potential and movie stardom."
	},
	{
		id: 12,
		name: "Toyota Supra MK5",
		image: require("./images/Supra mk5.jpg"),
		price: "$45,000",
		range: "382 hp",
		description: "Modern Supra with BMW engineering and sharp styling."
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
