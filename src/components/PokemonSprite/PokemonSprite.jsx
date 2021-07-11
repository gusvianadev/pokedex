import { PokemonSpriteContainerSty } from "./PokemonSprite.style";

const PokemonSprite = ({ sprite }) => {
	return (
		<PokemonSpriteContainerSty>
			<img src={sprite} alt="" />
		</PokemonSpriteContainerSty>
	);
};

export default PokemonSprite;
