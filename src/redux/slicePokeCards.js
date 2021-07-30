import { createSlice } from '@reduxjs/toolkit';
import getPokeList from './thunkPokeList';
import getSinglePoke from './thunkSinglePoke';

export const pokeCardsSlice = createSlice({
	name: 'pokeCards',
	initialState: {
		// "limit" sets how many pokémon will be fetched
		currentUrl: 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=12',
		nextUrl: '',
		fetchMore: true,
		showSingle: false,
		isLoading: false,
		isError: false,
		allPokes: [],
		pokeCards: [],
		singleCard: {},
	},
	reducers: {
		changeCurrentUrl: (state, { payload }) => {
			state.currentUrl = payload;
			state.fetchMore = true;
		},
		setShowSingle: (state, { payload }) => {
			state.showSingle = payload;
			if (payload === false) {
				state.isError = false;
			}
		},
	},
	extraReducers: {
		// poke list
		[getPokeList.pending]: (state) => {
			state.fetchMore = false;
			state.isLoading = true;
			state.isError = false;
		},
		[getPokeList.fulfilled]: (state, { payload }) => {
			state.fetchMore = false;
			state.isLoading = false;
			state.allPokes = [...payload.allPokes];
			state.pokeCards.push(...payload.pokeList);
			state.nextUrl = payload.nextUrl;
		},
		[getPokeList.rejected]: (state) => {
			state.isLoading = false;
			state.isError = true;
		},

		// single poke card
		[getSinglePoke.pending]: (state) => {
			state.isLoading = true;
			state.showSingle = true;
			state.isError = false;
		},
		[getSinglePoke.fulfilled]: (state, { payload }) => {
			state.isLoading = false;
			state.singleCard = payload;
		},
		[getSinglePoke.rejected]: (state) => {
			state.isLoading = false;
			state.isError = true;
		},
	},
});

export const { changeCurrentUrl, setShowSingle } = pokeCardsSlice.actions;

export default pokeCardsSlice.reducer;
