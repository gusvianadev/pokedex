import axios from "axios";
import { useQuery } from "react-query";

const GetPokeList = ({ offset }) => {
	const { isLoading, isError, data } = useQuery(
		"get-pokemon-list",
		async () =>
			await axios("https://pokeapi.co/api/v2/pokemon?offset=0&limit=12"),
		{
			refetchOnWindowFocus: false,
		}
	);

	return {
		isLoading,
		isError,
		pokeList: !data ? data : data.data.results,
	};
};

export default GetPokeList;
