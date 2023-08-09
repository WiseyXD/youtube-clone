import { useDispatch, useSelector } from "react-redux";
import { isToggle } from "../utils/appSlice";
import { Link, json } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { useEffect, useState } from "react";
import store from "../utils/store";
import { cacheResults } from "../utils/searchSlice";
import { searchVideos } from "../utils/videoSlice";
export default function Header() {
	const [search, setSearch] = useState("");
	const [suggestions, setSuggestions] = useState([]);
	const [showSuggestions, setShowSuggestions] = useState(false);
	const dispatch = useDispatch();
	const searchCache = useSelector((store) => store.search);
	useEffect(() => {
		if (search === "") {
			return;
		}

		// if (searchCache[search]) {
		// 	setSuggestions(searchCache[search]);
		// }
		const timer = setTimeout(() => handleSearch(), 200);

		return () => {
			clearTimeout(timer);
		};
	}, [search]);

	function handleHamburgerMenu() {
		dispatch(isToggle());
	}

	async function handleSearch() {
		const data = await fetch(YOUTUBE_SEARCH_API + search);
		const resp = await data.json();
		console.log(resp.items);
		setSuggestions(resp.items);
		// dispatch(cacheResults({ [search]: resp.items[1].snippet.title }));
	}

	function handleSubmit(e) {
		e.preventDefault;
		dispatch(searchVideos(suggestions));
	}
	return (
		<>
			<div className="flex flex-row justify-center p-5 shadow-lg -z-10">
				<div className="basis-1/4  text-center flex flex-row gap-4">
					<img
						src="https://w7.pngwing.com/pngs/626/110/png-transparent-black-logo-computer-icons-hamburger-button-menu-new-menu-angle-text-rectangle.png"
						alt="Menu"
						className="w-1/12 cursor-pointer"
						onClick={() => handleHamburgerMenu()}
					/>
					<a href="/">
						<img
							src="https://img.freepik.com/free-icon/youtube_318-219826.jpg"
							alt="Logo"
							className="w-1/12"
						/>
					</a>
				</div>
				<div
					className="basis-1/2 
			text-center"
				>
					<input
						type="text"
						placeholder="Search.."
						className="border-slate-950 border w-3/4 rounded-l-full px-2 py-1.5"
						onChange={(e) => setSearch(e.target.value)}
						onFocus={() => setShowSuggestions(true)}
						onBlur={() => setShowSuggestions(false)}
					/>
					<button
						onClick={(e) => handleSubmit(e)}
						className="border-black border rounded-r-full px-2 py-1.5"
						type="submit"
					>
						Search
					</button>
				</div>
				<div className="basis-1/4 flex justify-end">
					<img
						src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
						alt="userLogo"
						className="w-1/12"
					/>
				</div>
			</div>
			{showSuggestions && (
				<div className="flex w-[100%] justify-center z-10 absolute py-0 my-0">
					<ul className=" bg-white w-[35%]">
						{suggestions.map((s) => {
							return (
								<li
									className="px-2 hover:bg-gray-300 py-1"
									key={s.snippet.title}
								>
									{s.snippet.title}
								</li>
							);
						})}
					</ul>
				</div>
			)}
		</>
	);
}
