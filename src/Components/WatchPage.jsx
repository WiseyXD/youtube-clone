import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hideHamburger } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChatBox from "./LiveChatBox";

export default function WatchPage() {
	const dispatch = useDispatch();
	const [params, setParams] = useSearchParams();
	console.log(params.get("v"));
	useEffect(() => {
		dispatch(hideHamburger());
	}, []);

	return (
		<>
			<div className="flex w-full">
				<iframe
					width="1100"
					height="630"
					src={"https://www.youtube.com/embed/" + [params.get("v")]}
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
					className="mt-3"
				></iframe>

				<LiveChatBox />
			</div>
			<CommentsContainer />
		</>
	);
}
