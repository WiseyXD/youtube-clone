import { createSlice } from "@reduxjs/toolkit";

const currentVidSlice = createSlice({
	name: "currentVid",
	initialState: {
		vid: {},
	},
	reducers: {
		passVidInfo: (state, action) => {
			state.vid = {};
			state.vid = Object.assign(state.vid, action.payload);
		},
	},
});

export default currentVidSlice.reducer;
export const { passVidInfo } = currentVidSlice.actions;
