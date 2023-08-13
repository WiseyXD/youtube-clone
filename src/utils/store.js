import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import videoSlice from "./videoSlice";
import chatSlice from "./chatSlice";
import currentVidSLice from "./currentVidSLice";

const store = configureStore({
	reducer: {
		app: appSlice,
		search: searchSlice,
		video: videoSlice,
		chat: chatSlice,
		currentVid: currentVidSLice,
	},
});

export default store;
