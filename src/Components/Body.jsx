import React from "react";
import ButtonList from "./ButtonList";
import SideBar from "./SideBar";
import VideoContainer from "./VideoContainer";
import { Outlet } from "react-router-dom";

export default function Body() {
	return (
		<div className="flex">
			<div className="">
				<SideBar />
			</div>
			<div className="max-w-screen-2xl w-4/5 my-0 mx-auto">
				<Outlet />
			</div>
		</div>
	);
}
