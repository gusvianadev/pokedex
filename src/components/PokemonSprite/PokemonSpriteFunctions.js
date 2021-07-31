import { useState } from 'react';

const PokemonSpriteFunctions = (id) => {
	const [srcErrorCount, setSrcErrorCount] = useState(0);

	const fallBackSrc = (e) => {
		srcErrorCount < 2 && e.preventDefault();
		const srcList = [
			`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
			`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
		];

		const addErr = () => setSrcErrorCount(srcErrorCount + 1);

		switch (srcErrorCount) {
			case 0:
				(e.target.src = srcList[srcErrorCount]) && addErr();

				break;
			case 1:
				(e.target.src = srcList[srcErrorCount]) && addErr();
				break;
			case 2:
				(e.target.src =
					'https://pa1.narvii.com/6330/1da3f919cbe16293d98b9ef010828af707239293_hq.gif') &&
					addErr();
				break;

			default:
		}
	};
	return { fallBackSrc };
};

export default PokemonSpriteFunctions;
