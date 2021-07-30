import { useState } from 'react';

const PokemonSpriteFunctions = (id) => {
	const [srcErrorCount, setSrcErrorCount] = useState(0);

	const fallBackSrc = (e) => {
		srcErrorCount < 2 && e.preventDefault();
		const srcList = [
			`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
			`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
		];

		if (srcErrorCount === 0) {
			const toUse = srcList[0];
			e.target.src = toUse;
			setSrcErrorCount(1);
		}
		if (srcErrorCount === 1) {
			const toUse = srcList[1];
			e.target.src = toUse;
			setSrcErrorCount(2);
		}
		if (srcErrorCount === 2) {
			setSrcErrorCount(3);
		}
	};
	return { fallBackSrc };
};

export default PokemonSpriteFunctions;
