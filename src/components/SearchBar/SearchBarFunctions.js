import { useDispatch, useSelector } from 'react-redux';
import getSinglePoke from '../../redux/thunkSinglePoke';

const SearchBarFunctions = (
	pokeToSearch,
	setPokeToSearch,
	setWarning,
	setPossibleMatches
) => {
	const dispatch = useDispatch();
	const { allPokes } = useSelector((state) => state.pokeCards);

	const checkMatches = (unfixedPoke) => {
		const fixedPoke = unfixedPoke
			.toString()
			.replaceAll(' ', '-')
			.replaceAll('alolan', 'alola')
			.replaceAll('galarian' && 'galaria' && 'galari', 'galar')
			// you can add as much correction as you want
			.split('-');

		const possibleMatches = allPokes.filter((poke) =>
			fixedPoke.every((el) => poke.name.includes(el))
		);
		return possibleMatches;
	};

	const handleSearchBarMatches = () => {
		const pokeById = parseInt(pokeToSearch, 10);

		if (pokeById <= 898) {
			// to check if the input is a number
			setPossibleMatches([allPokes[pokeById - 1]]);
		} else if (pokeToSearch.length > 2) {
			// if not, it needs to be at least 3  char
			setPossibleMatches(checkMatches(pokeToSearch));
		} else {
			// if not, don't search anything
			setPossibleMatches([]);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const toSearch = e.target.classList.contains('match-option')
			? e.target.childNodes[1].textContent
			: pokeToSearch;

		if (parseInt(pokeToSearch, 10) || pokeToSearch.length > 2) {
			dispatch(getSinglePoke(toSearch));
			setPokeToSearch('');
		} else if (pokeToSearch.length > 0) {
			setWarning('Too short!');
		} else {
			setWarning('You must type something!');
		}
	};

	return { handleSearchBarMatches, handleSubmit };
};

export default SearchBarFunctions;
