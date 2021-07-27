import { createAsyncThunk } from '@reduxjs/toolkit';
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
				const removeSpaces = toFix.replace(' ', '-');
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
		try {
			// first just fetch the fixed name
			await fetchSpeciesFirst(fixedNameStr());
		} catch (e) {
			// if it fails, it means that the user wrote a wrong name/id or
			// that they're searching for a pokemon variant, so let's search a variant
			try {
				// it's the same, but you have to search the pokemon first
				// because variants can't be searched in species
				await fetchPokeDataFirst(fixedNameStr());
			} catch (e2) {
				// if it didn't work, it means that the user wrote a wrong name/id
				// or they're searching in the wrong order (e.g 'alola raichu' instead of 'raichu alola')
				// so, let's reverse that order
				const reversedName = fixedNameStr().split('-').reverse();

				try {
					// fetch the reversed name
					await fetchPokeDataFirst(reversedName.join('-'));
				} catch (e3) {
					// if it didn't work, it means that the user wrote a
					// wrong name/id
					throw new Error(e3);
				}
			}
		}

		return { pokeData, speciesData };
	}
);

export default getSinglePoke;
