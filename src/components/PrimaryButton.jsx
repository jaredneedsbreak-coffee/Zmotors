import React from "react";

const PrimaryButton = ({ children, onClick, className = "", type = "button" }) => {
	return (
		<button
			type={type}
			onClick={onClick}
			className={`bg-blue-500 hover:bg-blue-400 text-white font-bold px-4 py-2 rounded-full transition ${className}`}
		>
			{children}
		</button>
	);
};

export default PrimaryButton;
