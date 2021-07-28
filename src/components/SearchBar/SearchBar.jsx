import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button/Button';
import SearchBarSty from './SearchBar.style';
import getSinglePoke from '../../redux/thunkSinglePoke';
import checkMatches from './SearchBarFunctions';

const SearchBar = () => {
	const dispatch = useDispatch();
	const [pokeToSearch, setPokeToSearch] = useState('');
	const [warning, setWarning] = useState(false);
	const [possibleMatches, setPossibleMatches] = useState([]);
	const { allPokes } = useSelector((state) => state.pokeCards);

	useEffect(() => {
		pokeToSearch === '' && setPossibleMatches([]);
	}, [pokeToSearch]);

	return (
		<SearchBarSty
			onSubmit={(e) => {
				e.preventDefault();
				pokeToSearch.length >= 1
					? dispatch(
							getSinglePoke(pokeToSearch.toLowerCase().trim())
					  ) && setPokeToSearch('')
					: setWarning(true);
			}}
			warning={warning}
		>
			<input
				value={pokeToSearch}
				onChange={(e) => {
					setPokeToSearch(e.target.value);
					if (!Number.isNaN(parseInt(e.target.value, 10))) {
						setPossibleMatches(
							checkMatches(allPokes, e.target.value.trim())
						);
						return null;
					}

					if (e.target.value.length > 2) {
						setPossibleMatches(
							checkMatches(
								allPokes,
								e.target.value.trim().toLowerCase()
							)
						);
						return null;
					}
					setPossibleMatches([]);
					return null;
				}}
				type="text"
				placeholder="Search..."
			/>
			{possibleMatches.length > 0 && (
				<div className="search-bar-possible-matches">
					{possibleMatches.map((poke) => (
						<button
							key={`${poke.name} search bar possible match`}
							className="search-bar-possible-match"
							onClick={(e) =>
								dispatch(
									getSinglePoke(
										e.target.childNodes[1].textContent
									)
								) && setPokeToSearch('')
							}
							type="button"
						>
							<img
								className="match-sprite"
								src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`}
								alt={`${poke.name} search bar possible match`}
							/>
							<div className="match-name">{poke.name}</div>
						</button>
					))}
				</div>
			)}
			<Button
				aria="search pokémon from the searchbar"
				type="submit"
				testid="search-more-btn"
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
