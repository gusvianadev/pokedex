import PokemonSpriteSty from './PokemonSprite.style';
import PokemonSpriteFunctions from './PokemonSpriteFunctions';

const PokemonSprite = ({ id, alt, spriteStyles }) => {
	const { fallBackSrc } = PokemonSpriteFunctions(id);
	/* Some sprites explanation:
	 * If I want the best possible src, I should fetch every single poke and
	 * then take the src from there, but that'd be too slow, so instead I have
	 * all 3 possible src. It's a 90% effective system, but has one flaw:
	 * some src instead of being just the poke id, it's actually
	 * the poke-species id plus the variation name. I could make a function to try
	 * and get that, but right now I don't have the time. I'm gonna do it later if
	 * I can.
	 */

	return (
		<PokemonSpriteSty
			src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
			alt={alt}
			spriteStyles={spriteStyles}
			onError={fallBackSrc}
		/>
	);
};

export default PokemonSprite;
