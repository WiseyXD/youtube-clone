import React from "react";

import SideBar from "./SideBar";
export default function Body() {
	return (
		<div className="flex flex-row">
			<div>
				<SideBar />
			</div>
			<div className="basis-3/4 border border-red-700 w-56">Aryan</div>
		</div>
	);
}
