import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
export default function VideoContainer() {
	const [videos, setVideos] = useState([]);
	const dispatch = useDispatch();
	let searchVideos = useSelector((store) => store.video);
	//Comment
	async function getVideos() {
		const data = await fetch(YOUTUBE_API);
		const resp = await data.json();

		setVideos(resp.items);
	}
	useEffect(() => {
		getVideos();
	}, []);
	useEffect(() => {
		setVideos(searchVideos);
	}, [searchVideos]);

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
