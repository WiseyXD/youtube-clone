import { useDispatch } from "react-redux";
import { isToggle } from "../utils/appSlice";
export default function Header() {
	const dispatch = useDispatch();
	function handleHamburgerMenu() {
		dispatch(isToggle());
	}

	return (
		<div className="flex flex-row justify-center p-5 shadow-xl">
			<div className="basis-1/4  text-center flex flex-row gap-4">
				<img
					src="https://w7.pngwing.com/pngs/626/110/png-transparent-black-logo-computer-icons-hamburger-button-menu-new-menu-angle-text-rectangle.png"
					alt="Menu"
					className="w-1/12 cursor-pointer"
					onClick={() => handleHamburgerMenu()}
				/>
				<img
					src="https://img.freepik.com/free-icon/youtube_318-219826.jpg"
					alt="Logo"
					className="w-1/12"
				/>
			</div>
			<div className="basis-1/2  text-center">
				<input
					type="text"
					placeholder="Search.."
					className="border-slate-950 border w-3/4 rounded-l-full px-2 py-1.5"
				/>
				<button className="border-black border rounded-r-full px-2 py-1.5">
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
	);
}
