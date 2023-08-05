import React from "react";
import { Link } from "react-router-dom";

export default function VideoCard({ info, key }) {
	const { snippet, statistics } = info;
	const { channelTitle, localized, thumbnails, tags } = snippet;
	const { title } = localized;
	return (
		<ul className="p-2 mx-2 mb-2 w-56 shadow-2xl rounded-lg">
			<img src={thumbnails.medium.url} alt="" className="rounded-lg" />
			<li className="text-xl my-2 font-semibold">{title}</li>
			<li className="my-1">{channelTitle}</li>
			{/*  */}
			<li className="my-1">{statistics.viewCount}</li>
		</ul>
	);
}
