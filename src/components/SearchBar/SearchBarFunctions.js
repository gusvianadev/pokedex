const checkMatches = (allPokes, pokeToSearch) => {
	const fixedText = pokeToSearch
		.toString()
		.replaceAll(' ', '-')
		.replaceAll('alolan', 'alola')
		.replaceAll('galarian', 'galar')
		.replaceAll('galaria', 'galar')
		.replaceAll('galari', 'galar')
		.split('-');

	const possibleMatches = Number.isNaN(parseInt(pokeToSearch, 10))
		? allPokes.filter((poke) =>
				fixedText.every((el) => poke.name.includes(el))
		  )
		: allPokes.filter(
				(poke) => poke === allPokes[parseInt(pokeToSearch, 10) - 1]
		  );
	return possibleMatches;
};

export default checkMatches;
