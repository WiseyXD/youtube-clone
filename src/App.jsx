import { useState } from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
import store from "./utils/store";
import { Provider } from "react-redux";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<Provider store={store}>
			<Header />
			<Body />
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
