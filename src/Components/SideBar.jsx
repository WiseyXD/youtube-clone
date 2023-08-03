import React from "react";
import { useSelector } from "react-redux";
import store from "../utils/store";
export default function SideBar() {
	const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
	if (!isMenuOpen) {
		return null;
	}
	return (
		<div>
			<ul className="">
				<li className="font-bold">Subscription</li>
				<li className="font-bold">Details</li>
				<li className="font-bold">Studio</li>
			</ul>
			<h4 className="font-bold mt-4">Watch Later</h4>
			<ul>
				<li>Sports</li>
				<li>Gaming</li>
				<li>Computer Science</li>
				<li>Music</li>
			</ul>
		</div>
	);
}
