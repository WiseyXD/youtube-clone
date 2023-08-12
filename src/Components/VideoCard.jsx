import React from "react";
import { Link } from "react-router-dom";

export default function VideoCard({ info }) {
	const { snippet } = info;
	const { channelTitle, title, thumbnails } = snippet;
	const { standard, medium, high } = thumbnails;

	// const { title } = localized;

	return (
		<ul className="p-2 mx-2 mb-2 shadow-2xl rounded-lg h-[100%] ">
			<img src={high.url} alt="" className="rounded-lg" />
			<li className="text-xl my-2 font-semibold">{title}</li>
			<li className="my-1">{channelTitle}</li>
			{/*  */}
			{/* <li className="my-1">{statistics.viewCount}</li> */}
		</ul>
	);
}

// export const AdCard = ({ info }) => {
// 	return <VideoCard info={info} />;
// };
