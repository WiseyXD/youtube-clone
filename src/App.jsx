import { useState } from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
import store from "./utils/store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import VideoContainer from "./Components/VideoContainer";
import ButtonList from "./Components/ButtonList";
import WatchPage from "./Components/WatchPage";

function App() {
	const [count, setCount] = useState(0);
	const appRouter = createBrowserRouter([
		{
			path: "/",
			element: <Body />,
			children: [
				{
					path: "/",
					element: (
						<>
							<VideoContainer />
							<ButtonList />
						</>
					),
				},
				{
					path: "/watch",
					element: <WatchPage />,
				},
			],
		},
	]);
	return (
		<Provider store={store}>
			<Header />
			<RouterProvider router={appRouter} />
			{/* 
			App
				Header
					Hamburger and logo
					Search Bar
					Account
				
				Body 
					Sidebar
					Main Container
						Buttons List
						Video Container
							VideoCard
			*/}
		</Provider>
	);
}

export default App;
