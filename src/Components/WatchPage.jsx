import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hideHamburger } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

export default function WatchPage() {
	const dispatch = useDispatch();
	const [params, setParams] = useSearchParams();
	console.log(params.get("v"));
	useEffect(() => {
		dispatch(hideHamburger());
	}, []);

	return (
		<div>
			<iframe
				width="1100"
				height="600"
				src={"https://www.youtube.com/embed/" + [params.get("v")]}
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
				className="mt-3"
			></iframe>
		</div>
	);
}
