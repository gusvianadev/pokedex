import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import Button from '../Button/Button';
import HoveringBox from './HoveringBox/HoveringBox';
import PokeMatch from './PokeMatch/PokeMatch';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import SearchBarSty from './SearchBar.style';
import SearchBarFunctions from './SearchBarFunctions';

const SearchBar = () => {
	const [pokeToSearch, setPokeToSearch] = useState('');
	const [warning, setWarning] = useState('');
	const [possibleMatches, setPossibleMatches] = useState([]);
	const { handleSearchBarMatches, handleSubmit } = SearchBarFunctions(
		pokeToSearch.trim().toLowerCase(),
		setPokeToSearch,
		setWarning,
		setPossibleMatches
	);

	useEffect(() => {
		pokeToSearch.length > 0 && setWarning('');
		handleSearchBarMatches(); // for the input change

		const clearMatches = (e) => {
			if (e.target.id !== 'search-bar-input') {
				setWarning('');
				setPossibleMatches([]);
			}
		};

		// an onBlur doesn't work because it doesn't let you click the option or tab to it
		document.addEventListener('click', (e) => clearMatches(e));

		return document.removeEventListener('click', (e) => clearMatches(e));
	}, [pokeToSearch]);

	return (
		<SearchBarSty onSubmit={handleSubmit} warning={warning}>
			<input
				value={pokeToSearch}
				id="search-bar-input"
				onChange={(e) => setPokeToSearch(e.target.value)}
				onClick={(e) => e.target.value && handleSearchBarMatches(e)}
				type="text"
				placeholder="Search..."
				autoComplete="off"
			/>
			<HoveringBox
				content={
					possibleMatches.length > 0
						? possibleMatches.map((poke) => (
								<PokeMatch
									key={`${poke.name} search bar hovering option`}
									poke={poke}
									handleSubmit={handleSubmit}
								/>
						  ))
						: warning && (
								<ErrorMessage
									errMessSty={{
										width: '100%',
									}}
									content={warning}
								/>
						  )
				}
				setDisplay={
					possibleMatches.length > 0 || warning ? 'block' : 'none'
				}
			/>
			<Button
				aria="search pokémon from the searchbar"
				type="submit"
				btnStyles={{
					width: '18%',
					maxWidth: 'auto',
					padding: '0.5rem',
				}}
				content={<FaSearch />}
			/>
		</SearchBarSty>
	);
};

export default SearchBar;
