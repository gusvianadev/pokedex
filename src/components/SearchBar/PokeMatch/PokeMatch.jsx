import PokemonSprite from '../../PokemonSprite/PokemonSprite';
import PokeMatchSty from './PokeMatch.style';

const PokeMatch = ({ poke, handleSubmit }) => (
	<PokeMatchSty
		onClick={handleSubmit}
		onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}
		role="button"
		type="button"
		tabIndex="0"
		className="match-option"
	>
		<PokemonSprite
			alt={`${poke.name} search bar possible match`}
			spriteStyles={{
				width: '65px',
				height: '65px',
			}}
			id={poke.id}
		/>
		<div className="poke-match-name">{poke.name.replaceAll('-', ' ')}</div>
	</PokeMatchSty>
);

export default PokeMatch;
