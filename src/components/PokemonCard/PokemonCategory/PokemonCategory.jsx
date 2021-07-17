import GetCategory from "./GetCategory";

const PokemonCategory = (category) => {
	const { genus } = GetCategory(category);
	return <div>{genus}</div>;
};

export default PokemonCategory;
