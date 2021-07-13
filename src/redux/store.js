import { configureStore } from "@reduxjs/toolkit";
import pokeCards from "./slicePokeCards";

export default configureStore({
	reducer: {
		pokeCards,
	},
});
