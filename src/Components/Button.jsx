import React from "react";

export default function Button({ name }) {
	return (
		<button className="m-2 px-3 py-1 rounded-lg bg-gray-200">{name}</button>
	);
}
