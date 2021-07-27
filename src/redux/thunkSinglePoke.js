import { createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';

const getSinglePoke = createAsyncThunk(
	'singlePoke/getSinglePoke',
	async (pokeToSearch) => {
		// VARIABLES //
		const pokeDataUrl = 'https://pokeapi.co/api/v2/pokemon/';
		const speciesUrl = 'https://pokeapi.co/api/v2/pokemon-species/';
		let pokeData;
		let speciesData;
		const fixedNameStr = () => {
			let toFix = pokeToSearch;

			// first check if the user is searching for a name or id
			if (typeof pokeToSearch !== 'number') {
				// this replaces spaces with '-'
				const removeSpaces = toFix.replaceAll(' ', '-');
				toFix = removeSpaces;

				const fixedName = toFix
					.split('-') // transform the str into arr
					.map((element) => {
						// check if the user wrote 'galarian' or 'alolan'
						if (element === 'galarian') {
							return 'galar';
						}

						if (element === 'alolan') {
							return 'alola';
						}

						return element;
					})
					.join('-'); // transform the array back to string

				return fixedName;
			}

			return pokeToSearch;
		};
		let currentName = fixedNameStr();
		// FUNCTIONS //
		const fetchSpeciesFirst = async (poke) => {
			const resSpeciesData = await axios(`${speciesUrl}${poke}`);
			const resPokeData = await axios(
				`${pokeDataUrl}${resSpeciesData.data.id}`
			);

			speciesData = await resSpeciesData.data;
			pokeData = await resPokeData.data;
		};

		const fetchPokeDataFirst = async (poke) => {
			const resPokeData = await axios(`${pokeDataUrl}${poke}`);
			const resSpeciesData = await axios(
				`${speciesUrl}${resPokeData.data.species.name}`
			);

			pokeData = await resPokeData.data;
			speciesData = await resSpeciesData.data;
		};

		// fetching
		try {
			await fetchSpeciesFirst(currentName);
		} catch (e) {
			// the user is searching for a variant
			try {
				// it's the same, but you have to search the pokemon first
				// because variants can't be searched in species
				await fetchPokeDataFirst(currentName);
			} catch (e2) {
				// the user wrote the name backwards or the variant backwards
				// (e.g. 'alola pikachu' instead of 'pikachu alola')
				// warning: don't use arr.reverse() because some names have 3 parts
				currentName = currentName.split('-');
				currentName.unshift(currentName.pop());
				currentName = currentName.join('-');
				try {
					await fetchPokeDataFirst(currentName);
				} catch (e3) {
					throw new Error(e3);
				}
			}
		}

		return { pokeData, speciesData };
	}
);

export default getSinglePoke;
