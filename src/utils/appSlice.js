import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
	name: "app",
	initialState: { isMenuOpen: true },
	reducers: {
		isToggle: (state) => {
			state.isMenuOpen = !state.isMenuOpen;
		},
		hideHamburger: (state) => {
			state.isMenuOpen = false;
		},
	},
});

export default appSlice.reducer;
export const { isToggle, hideHamburger } = appSlice.actions;
