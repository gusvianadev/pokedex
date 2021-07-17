import { useState } from "react";
import FallbackSrc from "./FallbackSrc";
import { PokemonSpriteSty } from "./PokemonSprite.style";

const PokemonSprite = ({ sprite, pokeName, id }) => {
	const [brokenSrc, setBrokenSrc] = useState(false);
	const { addDefaultSrc } = FallbackSrc(setBrokenSrc, id);

	return (
		<PokemonSpriteSty broken={brokenSrc}>
			<img
				src={sprite}
				onError={(e) => addDefaultSrc(e)}
				alt={`sprite of ${pokeName}`}
			/>
		</PokemonSpriteSty>
	);
};

export default PokemonSprite;
