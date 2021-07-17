import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setupCache } from "axios-cache-adapter";

export const getSinglePoke = createAsyncThunk(
	"singlePoke/getSinglePoke",
	async (pokeToSearch) => {
		//? cache setter
		const cache = setupCache({
			maxAge: 604800000,
		});
		const getData = axios.create({
			adapter: cache.adapter,
		});

		const pokeData = (
			await getData({
				url: `https://pokeapi.co/api/v2/pokemon/${pokeToSearch}`,
				method: "get",
			})
		).data;

		const speciesData = (
			await getData({
				url: `https://pokeapi.co/api/v2/pokemon-species/${pokeToSearch}`,
				method: "get",
			})
		).data;

		return { pokeData, speciesData };
	}
);
