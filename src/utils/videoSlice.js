import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
	name: "video",
	initialState: [],
	reducers: {
		searchVideos: (state, action) => {
			state = Object.assign(state, action.payload);
		},
	},
});

export default videoSlice.reducer;
export const { searchVideos } = videoSlice.actions;
