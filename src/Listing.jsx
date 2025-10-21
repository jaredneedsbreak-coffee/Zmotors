import React, { useState } from "react";
import Cards from "./components/Cards";
import NavBar from "./components/NavBar";


const cars = [
	{
		id: 1,
		name: "1970 Dodge Charger",
		image: "/images/1970 Dodge Charger.jpg",
		price: "$75,000",
		range: "Classic Muscle",
		description: "Iconic American muscle car, famous for its power and classic design.",
		stock: 2
	},
	{
		id: 2,
		name: "Bugatti Chiron",
		image: "/images/buggati chiron.jpg",
		price: "$3,000,000",
		range: "261 mph top speed",
		description: "One of the fastest and most luxurious hypercars in the world.",
		stock: 1
	},
	{
		id: 3,
		name: "Dodge Challenger",
		image: "/images/dodge challenger.jpg",
		price: "$32,000",
		range: "Modern Muscle",
		description: "A modern take on the classic muscle car, known for its aggressive styling.",
		stock: 5
	},
	{
		id: 4,
		name: "Dodge Ram",
		image: "/images/dodge ram.jpg",
		price: "$40,000",
		range: "Pickup Truck",
		description: "Powerful and reliable pickup, perfect for work and play.",
		stock: 4
	},
	{
		id: 5,
		name: "Nissan GT-R R35",
		image: "/images/gtr r35.jpg",
		price: "$115,000",
		range: "565 hp",
		description: "Japanese supercar with advanced technology and blistering speed.",
		stock: 3
	},
	{
		id: 6,
		name: "Lamborghini Aventador",
		image: "/images/Lamborghini Aventador SVJ .jpg",
		price: "$517,000",
		range: "759 hp",
		description: "Extreme performance and dramatic styling from Lamborghini.",
		stock: 1
	},
	{
		id: 7,
		name: "Lamborghini Huracan",
		image: "/images/lamborghini huracan.jpg",
		price: "$249,000",
		range: "631 hp",
		description: "Exotic supercar with a V10 engine and stunning looks.",
		stock: 2
	},
	{
		id: 8,
		name: "Lamborghini Revuelto",
		image: "/images/lamorghini ruvuelto.jpg",
		price: "$600,000",
		range: "1001 hp (hybrid)",
		description: "Lamborghini's latest hybrid supercar, combining power and efficiency.",
		stock: 1
	},
	{
		id: 9,
		name: "Nissan Skyline R33 GTR",
		image: "/images/Nissan Skyline R33 GTR.jpg",
		price: "$80,000",
		range: "276 hp",
		description: "Legendary JDM car, loved for its performance and tuning potential.",
		stock: 2
	},
	{
		id: 10,
		name: "Porsche 911",
		image: "/images/porsche 911.jpg",
		price: "$114,400",
		range: "379 hp",
		description: "Timeless sports car, renowned for its handling and engineering.",
		stock: 3
	},
	{
		id: 11,
		name: "Toyota Supra MK4",
		image: "/images/supra mk4.jpg",
		price: "$90,000",
		range: "276 hp (stock)",
		description: "Cult classic, famous for its tuning potential and movie stardom.",
		stock: 2
	},
	{
		id: 12,
		name: "Toyota Supra MK5",
		image: "/images/Supra mk5.jpg",
		price: "$45,000",
		range: "382 hp",
		description: "Modern Supra with BMW engineering and sharp styling.",
		stock: 4
	}
];

const Listing = () => {
	const [search, setSearch] = useState("");
	const [orderCar, setOrderCar] = useState(null);
	const [orderSuccess, setOrderSuccess] = useState(false);

	const filteredCars = cars.filter(car =>
		car.name.toLowerCase().includes(search.toLowerCase()) ||
		car.description.toLowerCase().includes(search.toLowerCase()) ||
		car.range.toLowerCase().includes(search.toLowerCase())
	);

	const handleOrder = (car) => {
		setOrderCar(car);
		setOrderSuccess(false);
	};

	const handleOrderSubmit = (orderData) => {
		setOrderCar(null);
		setOrderSuccess(true);
		// Here you could send orderData to a backend or show a confirmation
	};

	const handleOrderCancel = () => {
		setOrderCar(null);
	};

	return (
		<div className="min-h-screen bg-gray-900 text-white flex flex-col">
			<NavBar />
			<div className="py-16 px-4 flex-1">
				<h1 className="text-4xl font-bold text-center mb-10">Available Cars</h1>
				<div className="flex justify-center mb-8">
					<input
						type="text"
						placeholder="Search cars..."
						value={search}
						onChange={e => setSearch(e.target.value)}
						className="w-full max-w-md px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
					/>
				</div>
				{orderSuccess && (
					<div className="text-green-400 text-center mb-6 font-semibold">Order placed successfully!</div>
				)}
				<div className="flex flex-wrap justify-center gap-10">
					{filteredCars.length > 0 ? (
						filteredCars.map(car => (
							<Cards
								key={car.id}
								name={car.name}
								image={car.image}
								price={car.price}
								range={car.range}
								description={car.description}
								stock={car.stock}
								onOrderClick={() => handleOrder(car)}
							/>
						))
					) : (
						<p className="text-gray-400 text-lg">No cars found.</p>
					)}
				</div>
			</div>
			{orderCar && (
				<Order car={orderCar} onSubmit={handleOrderSubmit} onCancel={handleOrderCancel} />
			)}
		</div>
	);
};

export default Listing;
