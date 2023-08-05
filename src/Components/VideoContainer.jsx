import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
export default function VideoContainer() {
	const [videos, setVideos] = useState([]);

	async function getVideos() {
		const data = await fetch(YOUTUBE_API);
		const resp = await data.json();
		console.log(resp);
		setVideos(resp.items);
	}
	useEffect(() => {
		getVideos();
	}, []);
	console.log(videos);
	return (
		<div className="flex flex-wrap gap-3">
			{videos.map((vid) => {
				return (
					<Link key={vid.id} to={"/watch?v=" + vid.id}>
						<VideoCard info={vid} />
					</Link>
				);
			})}
		</div>
	);
}
