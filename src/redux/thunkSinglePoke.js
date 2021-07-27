import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getSinglePoke = createAsyncThunk(
	'singlePoke/getSinglePoke',
	async (pokeToSearch, { getState }) => {
		const pokeDataUrl = 'https://pokeapi.co/api/v2/pokemon/';
		const speciesDataUrl = 'https://pokeapi.co/api/v2/pokemon-species/';
		const { allPokes } = getState().pokeCards;
		const fixedText = pokeToSearch
			.toString()
			.replaceAll(' ', '-')
			.replaceAll('alolan', 'alola')
			.replaceAll('galarian', 'galar')
			.split('-');
		const filteredPokemon = allPokes
			.filter((poke) => fixedText.every((el) => poke.includes(el)))
			.join('-');
		let pokeData;
		let speciesData;
		if (typeof pokeToSearch === 'number' || fixedText.length === 1) {
			const resSpeciesData = await axios(speciesDataUrl + fixedText);
			const resPokeData = await axios(
				pokeDataUrl + resSpeciesData.data.id
			);

			speciesData = await resSpeciesData.data;
			pokeData = await resPokeData.data;
		} else {
			const resPokeData = await axios(pokeDataUrl + filteredPokemon);
			const resSpeciesData = await axios(resPokeData.data.species.url);

			pokeData = await resPokeData.data;
			speciesData = await resSpeciesData.data;
		}

		return { pokeData, speciesData };
	}
);

export default getSinglePoke;
