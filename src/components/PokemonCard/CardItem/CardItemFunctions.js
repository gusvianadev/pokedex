import { useSelector } from 'react-redux';
import { PokeTypeSty } from './CardItem.style';
import PokemonSprite from '../../PokemonSprite/PokemonSprite';

const CardItemFunctions = ({ pokeName, pokeId, cardItem, showSingle }) => {
	const { pokeData, speciesData } = useSelector(
		(state) => state.pokeCards.singleCard
	);

	const contentToShow = () => {
		switch (cardItem) {
			case 'poke-id':
				return `#${(!showSingle ? pokeId : speciesData.id)
					.toString()
					.padStart(3, '0')}`;
			case 'sprite':
				return (
					<PokemonSprite
						alt={`sprite of ${pokeName}`}
						spriteStyles={{
							width: '110px',
							height: '110px',
						}}
						id={!showSingle ? pokeId : pokeData.id}
					/>
				);

			case 'poke-name':
				return pokeName.replaceAll('-', ' ');
			case 'category':
				return speciesData.genera.filter(
					(cat) => cat.language.name === 'en'
				)[0].genus;
			case 'types':
				return pokeData.types.map((type, i) => (
					<PokeTypeSty
						pokeType={type.type.name}
						key={`${pokeName} type nº ${i + 1}`}
						className="card-poke-type"
					>
						{type.type.name}
					</PokeTypeSty>
				));
			case 'height':
			case 'weight':
				return [cardItem, (pokeData[cardItem] * 0.1).toFixed(1)].map(
					(el, i) => (
						<div key={`${cardItem} of ${pokeName} - item ${i + 1}`}>
							{i === 0 && el}
							{i > 0 && cardItem === 'height'
								? `${el}m`
								: i > 0 && `${el}kg`}
						</div>
					)
				);
			case 'flavor-text':
				return (
					<div>
						{
							speciesData.flavor_text_entries
								.filter((entry) => entry.language.name === 'en')
								.pop().flavor_text
						}
					</div>
				);

			default:
				return 'error';
		}
	};
	return { contentToShow: contentToShow() };
};

export default CardItemFunctions;
