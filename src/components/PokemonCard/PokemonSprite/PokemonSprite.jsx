import { useState } from 'react';
import FallbackSrc from './FallbackSrc';
import PokemonSpriteSty from './PokemonSprite.style';

const PokemonSprite = ({ sprite, pokeName, id }) => {
	const [brokenSrc, setBrokenSrc] = useState(false);
	const { addDefaultSrc } = FallbackSrc(setBrokenSrc, id);

	return (
		<PokemonSpriteSty
			src={sprite}
			onError={(e) => addDefaultSrc(e)}
			alt={`sprite of ${pokeName}`}
			broken={brokenSrc}
		/>
	);
};

export default PokemonSprite;
