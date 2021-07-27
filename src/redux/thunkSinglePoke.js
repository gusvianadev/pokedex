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
			// you can add here as much correction as you want
			.split('-');

		// this also allows the user to search incomplete names as long as it
		// gives only one result. E.g.: 'pik ro' will be 'pikachu-rock-star'
		const filteredPokemon = allPokes
			.filter((poke) => fixedText.every((el) => poke.includes(el)))
			.join('-');
		let pokeData;
		let speciesData;
		// because if i'ts a number or a single name, then the user is searching
		// for a normal pokemon, otherwise it's searching for a variant, and
		// in that case, it has to be done the other way
		if (
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
			const resPokeData = await axios(pokeDataUrl + filteredPokemon);
			const resSpeciesData = await axios(resPokeData.data.species.url);

			pokeData = await resPokeData.data;
			speciesData = await resSpeciesData.data;
		}

		return { pokeData, speciesData };
	}
);

export default getSinglePoke;
