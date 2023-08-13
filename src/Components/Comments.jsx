import React from "react";
import { BiUserCircle } from "react-icons/bi";

export default function Comments({ data }) {
	const { name, text, replies } = data;
	return (
		<div className="text-2xl mt-4 bg-gray-200 rounded-lg py-2">
			<div className="flex items-center">
				<BiUserCircle size={45} />
				<div className="pl-2 pt-1">
					<p className="font-bold text-lg">{name}</p>
					<p className="text-base">{text}</p>
				</div>
			</div>
		</div>
	);
}
