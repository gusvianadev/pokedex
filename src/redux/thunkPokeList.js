import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPokeList = createAsyncThunk(
	"pokeList/getpokeList",
	async (currentUrl) => {
		const pokeList = [];
		const res = (await axios(currentUrl)).data;

		const nextUrl = res.next;
		const pokesToFetch = res.results;

		for (let i = 0; i < pokesToFetch.length; i++) {
			const currentPoke = pokesToFetch[i];
			const pokeName = currentPoke.name;
			const resPokeData = await axios(
				`https://pokeapi.co/api/v2/pokemon/${pokeName}`
			);
			const resPokeSpecData = await axios(
				`https://pokeapi.co/api/v2/pokemon-species/${pokeName}`
			);

			pokeList.push({
				pokeName,
				basicData: resPokeData.data,
				speciesData: resPokeSpecData.data,
			});
		}

		return { nextUrl, pokeList };
	}
);
