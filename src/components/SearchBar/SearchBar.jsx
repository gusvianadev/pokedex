import { FaSearch } from "react-icons/fa";
import Button from "../Button/Button";
import { SearchBarSty } from "./SearchBar.style";

const SearchBar = () => {
	return (
		<SearchBarSty>
			<input type="text" placeholder="Search..." />
			<Button
				content={<FaSearch />}
				props={{ width: "18%", maxWidth: "auto", padding: "0" }}
			/>
		</SearchBarSty>
	);
};

export default SearchBar;
