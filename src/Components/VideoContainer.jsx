import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { current } from "@reduxjs/toolkit";
import { passVidInfo } from "../utils/currentVidSLice";
export default function VideoContainer() {
	const [videos, setVideos] = useState([]);
	const dispatch = useDispatch();
	let searchVideos = useSelector((store) => store.video.vids);

	async function getVideos() {
		const data = await fetch(YOUTUBE_API);
		const resp = await data.json();
		console.log(resp.items);
		setVideos(resp.items);
	}

	function currentVid(vid) {
		dispatch(passVidInfo(vid));
	}

	useEffect(() => {
		getVideos();
	}, []);
	useEffect(() => {
		setVideos(searchVideos);
		console.log(videos);
	}, [searchVideos]);

	return (
		<div className="lg:grid lg:grid-cols-4 lg:grid-rows-4 md:grid md:grid-cols-3 md:grid-rows-3 sm:grid sm:grid-cols-2 sm:grid-rows-2 grid grid-cols-1 gap-3 group-hover:">
			{videos.map((vid) => {
				return (
					<Link
						key={vid.id}
						to={"/watch?v=" + vid.id}
						onClick={() => currentVid(vid)}
					>
						<VideoCard info={vid} />
					</Link>
				);
			})}
		</div>
	);
}
