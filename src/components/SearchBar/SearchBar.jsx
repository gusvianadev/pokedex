import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import { SearchBarSty } from "./SearchBar.style";
import { useState } from "react";
import { getSinglePoke } from "../../redux/thunkSinglePoke";

const SearchBar = () => {
	const dispatch = useDispatch();
	const [pokeToSearch, setPokeToSearch] = useState("");
	return (
		<SearchBarSty
			onSubmit={(e) => {
				e.preventDefault();
				pokeToSearch
					? dispatch(getSinglePoke(pokeToSearch))
					: alert("You must type something!");
				setPokeToSearch("");
			}}
		>
			<input
				value={pokeToSearch}
				onChange={(e) => {
					setPokeToSearch(e.target.value);
				}}
				type="text"
				placeholder="Search..."
			/>
			<Button
				aria="search pokémon from the searchbar"
				type="submit"
				testid="search-more-btn"
				styles={{
					width: "18%",
					maxWidth: "auto",
					padding: ".5rem 0",
				}}
				content={<FaSearch />}
			/>
		</SearchBarSty>
	);
};

export default SearchBar;
