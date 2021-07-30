import PokemonSpriteSty from './PokemonSprite.style';
import PokemonSpriteFunctions from './PokemonSpriteFunctions';

const PokemonSprite = ({ id, alt, spriteStyles }) => {
	const { fallBackSrc } = PokemonSpriteFunctions(id);

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
