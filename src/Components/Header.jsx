import { useDispatch, useSelector } from "react-redux";
import { isToggle } from "../utils/appSlice";
import { Link, json } from "react-router-dom";
import { YOUTUBE_SEARCH_API, AUTOCOMPLETE_API } from "../utils/constant";
import { useEffect, useState } from "react";
import store from "../utils/store";
import { cacheResults } from "../utils/searchSlice";
import { searchVideos } from "../utils/videoSlice";
import Logo from "../assets/Logo.jpg";
import Hamburger from "../assets/Hamburger.png";
import { BiUserCircle } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

export default function Header() {
	const [search, setSearch] = useState("");
	const [suggestions, setSuggestions] = useState([]);
	const [showSuggestions, setShowSuggestions] = useState(false);
	const dispatch = useDispatch();
	const searchCache = useSelector((store) => store.search);
	const hamburgerMenu = useSelector((store) => store.app.isMenuOpen);

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
		const data = await fetch(AUTOCOMPLETE_API + search);
		const resp = await data.json();

		setSuggestions(resp);

		// dispatch(cacheResults({ [search]: resp.items[1].snippet.title }));
	}

	function handleSubmit(e) {
		e.preventDefault;
		dispatch(searchVideos(suggestions));
	}
	return (
		<>
			<div className="flex justify-center items-center px-3 py-1 shadow-xl -z-10">
				<div className=" flex flex-row gap-4 basis-1/4  text-center items-center sm:gap-6">
					{!hamburgerMenu ? (
						<button>
							<RxHamburgerMenu
								size={30}
								onClick={() => handleHamburgerMenu()}
								className="self-center cursor-pointer "
							/>
						</button>
					) : (
						<button>
							<RxCross2
								size={30}
								onClick={() => handleHamburgerMenu()}
								className="self-center cursor-pointer"
							/>
						</button>
					)}

					<a href="/">
						<img src={Logo} className="w-36 align-middle " />
					</a>
				</div>
				<div className="flex basis-1/2 justify-center">
					<input
						type="text"
						placeholder="Search.."
						className="border border-gray-300 w-3/4 rounded-l-full px-2 py-1.5 "
						onChange={(e) => setSearch(e.target.value)}
						onFocus={() => setShowSuggestions(true)}
						onBlur={() => setShowSuggestions(false)}
					/>
					<button
						onClick={(e) => handleSubmit(e)}
						className="border border-gray-300 rounded-r-full px-2 py-1.5"
						type="submit"
					>
						Search
					</button>
				</div>
				<div className="basis-1/4 flex justify-end">
					<BiUserCircle size={48} />
				</div>
			</div>
			{showSuggestions && (
				<div className=" h-[50%] w-[100%] flex  justify-center overflow-y-hidden absolute z-10">
					<ul className=" bg-white w-[35%]">
						{suggestions.map((s) => {
							return (
								<li
									className="px-2 hover:bg-gray-300 py-1"
									key={s.word}
								>
									{s.word}
								</li>
							);
						})}
					</ul>
				</div>
			)}
		</>
	);
}
