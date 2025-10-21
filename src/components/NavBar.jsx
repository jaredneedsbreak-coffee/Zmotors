import React from "react";

const NavBar = () => {
	return (
		<nav className="flex justify-between items-center px-8 py-6 bg-gray-900 w-full">
			<div className="text-3xl font-bold tracking-wide text-yellow-400">Zmotors</div>
							<ul className="flex gap-8 text-lg">
								<li><a href="/" className="hover:text-yellow-400 transition">Home</a></li>
								<li><a href="/listing" className="hover:text-yellow-400 transition">Listing</a></li>
								<li><a href="#about" className="hover:text-yellow-400 transition">About</a></li>
								<li><a href="#contact" className="hover:text-yellow-400 transition">Contact</a></li>
							</ul>
		</nav>
	);
};

export default NavBar;
