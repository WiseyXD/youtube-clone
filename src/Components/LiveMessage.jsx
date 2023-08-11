import React from "react";
import { BiUserCircle } from "react-icons/bi";
export default function LiveMessage({ name, message }) {
	return (
		<div className="flex items-center bg-gray-200 p-2 m-1 rounded-lg">
			<BiUserCircle size={50} />
			<p className="font-bold mx-2">{name}</p>
			<p className="">{message}</p>
		</div>
	);
}
