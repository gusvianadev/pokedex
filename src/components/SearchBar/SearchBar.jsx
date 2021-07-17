import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import { SearchBarSty } from "./SearchBar.style";
import { useState } from "react";
import { getSinglePoke } from "../../redux/thunkSinglePoke";
import { setShowSingle } from "../../redux/slicePokeCards";

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
			}}
		>
			<input
				onChange={(e) => {
					setPokeToSearch(e.target.value);
					!e.target.value && dispatch(setShowSingle(false));
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
