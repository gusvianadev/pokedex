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
			.replaceAll('galaria', 'galar')
			.replaceAll('galari', 'galar')
			// you can add here as much correction as you want
			.split('-');

		// this also allows the user to search incomplete names as long as it
		// gives only one result. E.g.: 'pik ro' will be 'pikachu-rock-star'
		const filteredPokemon = allPokes
			.filter((poke) => fixedText.every((el) => poke.includes(el)))
			.join('-');
		let pokeData;
		let speciesData;

		if (
			// this is to check if the user is searching with an ID or a poke
			// with a single name
			!Number.isNaN(parseInt(pokeToSearch, 10)) ||
			fixedText.length === 1
		) {
			const resSpeciesData = Number.isNaN(parseInt(pokeToSearch, 10))
				? await axios(speciesDataUrl + filteredPokemon.split('-')[0])
				: await axios(speciesDataUrl + pokeToSearch);
			const resPokeData = await axios(
				pokeDataUrl + resSpeciesData.data.id
			);

			speciesData = await resSpeciesData.data;
			pokeData = await resPokeData.data;
		} else {
			// if above was false, then they're searching for a variant and
			// has to be done this way
			const resPokeData = await axios(pokeDataUrl + filteredPokemon);
			const resSpeciesData = await axios(resPokeData.data.species.url);

			pokeData = await resPokeData.data;
			speciesData = await resSpeciesData.data;
		}

		return { pokeData, speciesData };
	}
);

export default getSinglePoke;
