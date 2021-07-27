import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getPokeList = createAsyncThunk(
	'pokeList/getpokeList',
	async (currentUrl) => {
		const resAllPokes = await axios(
			'https://pokeapi.co/api/v2/pokemon/?limit=2000'
		);
		const resPokeList = await axios(currentUrl);

		const allPokes = await resAllPokes.data.results.map(
			(poke) => poke.name
		);
		const nextUrl = await resPokeList.data.next;
		const pokesToFetch = await resPokeList.data.results;
		const pokeList = pokesToFetch.map((poke) => poke.name);

		return { nextUrl, pokeList, allPokes };
	}
);

export default getPokeList;
