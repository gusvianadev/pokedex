import { createSlice } from "@reduxjs/toolkit";
import { getPokeList } from "./thunkPokeList";

export const pokeCardsSlice = createSlice({
	name: "pokeCards",
	initialState: {
		currentUrl: "https://pokeapi.co/api/v2/pokemon?offset=0&limit=9", //? "limit" sets how many pokémon will be fetched
		nextUrl: "",
		fetchMore: true,
		isLoading: false,
		isError: false,
		pokeCards: [],
	},
	reducers: {
		changeCurrentUrl: (state, { payload }) => {
			state.currentUrl = payload;
			state.fetchMore = true;
		},
	},
	extraReducers: {
		[getPokeList.pending]: (state) => {
			state.fetchMore = false;
			state.isLoading = true;
		},
		[getPokeList.fulfilled]: (state, { payload }) => {
			state.fetchMore = false;
			state.isLoading = false;
			state.pokeCards.push(...payload.pokeList);
			state.nextUrl = payload.nextUrl;
		},
		[getPokeList.rejected]: (state) => {
			state.isLoading = false;
			state.isError = true;

			console.log("error");
		},
	},
});

export const { changeCurrentUrl } = pokeCardsSlice.actions;

export default pokeCardsSlice.reducer;
