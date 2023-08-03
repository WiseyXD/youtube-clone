import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
	name: "app",
	initialState: { isMenuOpen: true },
	reducers: {
		isToggle: (state) => {
			state.isMenuOpen = !state.isMenuOpen;
		},
	},
});

export default appSlice.reducer;
export const { isToggle } = appSlice.actions;
