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
			<div className="max-w-full w-11/12 my-0 mx-auto">
				<Outlet />
			</div>
		</div>
	);
}
