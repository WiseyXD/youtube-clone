import React from "react";
import { useSelector } from "react-redux";
import store from "../utils/store";
export default function SideBar() {
	const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
	if (!isMenuOpen) {
		return null;
	}
	return (
		<div className="my-2 px-3">
			<ul className="text-left">
				<li className="font-bold ">Subscription</li>
				<ul>
					<li>Sports</li>
					<li>Gaming</li>
					<li>Computer Science</li>
					<li>Music</li>
				</ul>
				<li className="font-bold mt-4">Details</li>
				<ul>
					<li>Sports</li>
					<li>Gaming</li>
					<li>Computer Science</li>
					<li>Music</li>
				</ul>
				<li className="font-bold mt-4">Studio</li>
				<ul>
					<li>Sports</li>
					<li>Gaming</li>
					<li>Computer Science</li>
					<li>Music</li>
				</ul>
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
