import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
	name: "video",
	initialState: {
		vids: [],
	},
	reducers: {
		searchVideos: (state, action) => {
			state.vids = Object.assign(state.vids, action.payload);
		},
	},
});

export default videoSlice.reducer;
export const { searchVideos } = videoSlice.actions;
