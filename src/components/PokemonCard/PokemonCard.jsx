import { useSelector } from 'react-redux';
import PokemonCardSty from './PokemonCard.style';
import CardItem from './CardItem/CardItem';
import PokemonCardFunctions from './PokemonCardFunctions';

const PokemonCard = ({
	pokeName,
	pokeId,
	setScrollTopPosition,
	cardsHolderRef,
}) => {
	const { showSingle } = useSelector((state) => state.pokeCards);
	const cardItemList = [
		'poke-id',
		'sprite',
		'poke-name',
		'category',
		'types',
		'height',
		'weight',
		'flavor-text',
	];
	const { handleShowCard } = PokemonCardFunctions({
		pokeName,
		setScrollTopPosition,
		cardsHolderRef,
	});

	return (
		<PokemonCardSty
			id={`${pokeName}-pokemon-card`}
			onClick={() => {
				!showSingle && handleShowCard();
			}}
			onKeyPress={(e) => {
				!showSingle && e.key === 'Enter' && handleShowCard();
			}}
			showSingle={showSingle}
			tabIndex="0"
		>
			{(!showSingle ? cardItemList.slice(0, 3) : cardItemList).map(
				(item) => (
					<CardItem
						key={`poke card ${item}`}
						pokeName={pokeName}
						pokeId={pokeId}
						cardItem={item}
						showSingle={showSingle}
					/>
				)
			)}
		</PokemonCardSty>
	);
};

export default PokemonCard;
