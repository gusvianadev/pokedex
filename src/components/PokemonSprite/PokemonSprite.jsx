import { PokemonSpriteSty } from "./PokemonSprite.style";

const PokemonSprite = ({ sprite }) => {
	return (
		<PokemonSpriteSty>
			<img src={sprite} alt="" />
		</PokemonSpriteSty>
	);
};

export default PokemonSprite;
