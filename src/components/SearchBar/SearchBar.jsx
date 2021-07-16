import { FaSearch } from "react-icons/fa";
import { ButtonSty } from "../Button/Button.style";
import { SearchBarSty } from "./SearchBar.style";

const SearchBar = () => {
	return (
		<SearchBarSty>
			<input type="text" placeholder="Search..." />
			<ButtonSty
				aria="search pokémon from the searchbar"
				props={{ width: "18%", maxWidth: "auto", padding: "0" }}
			>
				<FaSearch />
			</ButtonSty>
		</SearchBarSty>
	);
};

export default SearchBar;
