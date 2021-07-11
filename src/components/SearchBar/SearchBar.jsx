import { FaSearch } from "react-icons/fa";
import { SearchBarSty } from "./SearchBar.style";

const SearchBar = () => {
	return (
		<SearchBarSty>
			<input type="text" />
			<button>
				<FaSearch />
			</button>
		</SearchBarSty>
	);
};

export default SearchBar;
