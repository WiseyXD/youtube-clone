import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideHamburger } from "../utils/appSlice";
import { passVidInfo } from "../utils/currentVidSLice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import LiveChatBox from "./LiveChatBox";
import { BiUserCircle, BiLike, BiDislike } from "react-icons/bi";
import { PiShareFatBold } from "react-icons/pi";
import { YOUTUBE_SHORT_API } from "../utils/constant";

export default function WatchPage() {
	const dispatch = useDispatch();
	const [params, setParams] = useSearchParams();

	const vid = useSelector((store) => store.currentVid.vid);
	const { snippet } = vid;
	const [suggestVids, setSuggestVids] = useState(
		useSelector((store) => store.video.vids)
	);

	function currentVid(vid) {
		dispatch(passVidInfo(vid));
	}

	async function getSuggestedVideos() {
		const data = await fetch(YOUTUBE_SHORT_API);
		const resp = await data.json();
		console.log(resp.items);
		setSuggestVids(resp.items);
	}

	useEffect(() => {
		getSuggestedVideos();
	}, []);

	useEffect(() => {
		dispatch(hideHamburger());
	}, []);

	return (
		<>
			<div className="flex flex-col lg:flex lg:flex-row ">
				<div className="w-full ">
					<iframe
						// width="1100"
						// height="630"
						src={
							"https://www.youtube.com/embed/" + [params.get("v")]
						}
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen
						className="mt-3 h-[630px] w-full shadow-slate-500 shadow-md"
					></iframe>
					<p className="text-2xl font-semibold mt-1">
						{snippet.title}
					</p>
					<div className="flex justify-between">
						<div className="flex my-2 justify-start items-center">
							<img
								src={snippet.thumbnails.default.url}
								alt=""
								className="w-1/5 h-[85%] rounded-full"
							/>
							<p className="mx-2 text-xl">
								{snippet.channelTitle}
							</p>
							<button className="bg-gray-600 text-white ml-4 px-5 py-2 rounded-full hover:bg-gray-400 ease-in-out duration-300">
								Subscribe
							</button>
						</div>
						<div className="flex my-2 justify-start items-center">
							<div className="border border-gray-300 rounded-full">
								<button className=" px-5 py-2 border-r rounded-l-full border-r-gray-300 hover:bg-gray-600 ease-in-out duration-300">
									<BiLike size={25} />
								</button>
								<button className="px-3 py-2 rounded-r-full hover:bg-gray-600 ease-in-out duration-300">
									<BiDislike size={25} />
								</button>
							</div>
							<div className="flex my-2 mx-2 justify-start items-center ml-2 border border-gray-300 rounded-full  hover:bg-gray-600 ease-in-out duration-300">
								<button className="px-2 py-2">
									<PiShareFatBold size={25} />
								</button>
								<p className="text-lg px-1 pr-2">Share</p>
							</div>
						</div>
					</div>
				</div>

				{/* <LiveChatBox /> */}
			</div>
			<div className="flex flex-col mb-5 lg:flex lg:flex-row">
				<div className="lg:basis-2/3">
					<CommentsContainer />
				</div>

				<div className="grid grid-cols-1 grid-rows-1 lg:basis-1/3 lg:max-h-[1000px] overflow-y-scroll">
					{suggestVids.map((vid) => {
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
			</div>
		</>
	);
}
