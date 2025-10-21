import React from "react";
import Listing from "./Listing";
import NavBar from "./components/NavBar";

const LandingPage = () => {
	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white flex flex-col">
			<header className="w-full">
				<NavBar />
				<div className="flex flex-col items-center justify-center py-20">
					<h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-center">Drive the Future with <span className="text-yellow-400">Zmotors</span></h1>
					<p className="text-xl md:text-2xl mb-8 text-center max-w-2xl">Innovative. Reliable. Electric. Discover our latest models and experience the next generation of driving.</p>
					<a href="#models" className="bg-yellow-400 text-gray-900 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition">Explore Models</a>
				</div>
			</header>
			{/* Models section removed. Landing page no longer includes Listing. */}
			<section id="about" className="py-16 bg-gray-800">
				<h2 className="text-3xl font-bold text-center mb-6">About Zmotors</h2>
				<p className="text-center max-w-2xl mx-auto text-lg">Zmotors is committed to revolutionizing the automotive industry with cutting-edge electric vehicles. Our mission is to deliver sustainable mobility solutions without compromising on style or performance.</p>
			</section>
			<footer id="contact" className="bg-gray-900 py-10 text-center mt-auto">
				<h2 className="text-2xl font-bold mb-2">Contact Us</h2>
				<p className="mb-2">Email: info@zmotors.com | Phone: (123) 456-7890</p>
				<p className="text-gray-400">&copy; {new Date().getFullYear()} Zmotors. All rights reserved.</p>
			</footer>
		</div>
	);
};

export default LandingPage;
