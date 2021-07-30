import { useDispatch, useSelector } from 'react-redux';
import PokemonSprite from '../PokemonSprite/PokemonSprite';
import PokemonCardSty from './PokemonCard.style';
import { setShowSingle } from '../../redux/slicePokeCards';
import getSinglePoke from '../../redux/thunkSinglePoke';
import CardItem from './CardItem/CardItem';

const PokemonCard = ({
	pokeName,
	id,
	setScrollTopPosition,
	cardsHolderRef,
}) => {
	const { showSingle, singleCard } = useSelector((state) => state.pokeCards);
	const { pokeData, speciesData } = singleCard;
	const dispatch = useDispatch();

	return (
		<PokemonCardSty
			id={`${pokeName}-pokemon-card`}
			onClick={() => {
				!showSingle &&
					dispatch(getSinglePoke(pokeName)) &&
					setScrollTopPosition(cardsHolderRef.current.scrollTop) &&
					dispatch(setShowSingle(true));
			}}
			showSingle={showSingle}
		>
			<CardItem
				pokeName={pokeName}
				id="number"
				content={!showSingle ? id : singleCard.speciesData.id}
			/>
			<CardItem
				pokeName={pokeName}
				id="sprite"
				content={
					<PokemonSprite
						src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
						alt={`sprite of ${pokeName}`}
						spriteStyles={{
							width: '110px',
							height: '110px',
						}}
						id={id}
					/>
				}
			/>
			<CardItem
				pokeName={pokeName}
				id="name"
				content={pokeName.replaceAll('-', ' ')}
			/>
			{showSingle && (
				<>
					<CardItem
						pokeName={pokeName}
						id="category"
						content={speciesData.genera}
					/>
					<CardItem
						pokeName={pokeName}
						id="types"
						content={pokeData.types}
					/>
					<CardItem
						pokeName={pokeName}
						id="height"
						content={pokeData.height}
					/>
					<CardItem
						pokeName={pokeName}
						id="weight"
						content={pokeData.weight}
					/>
					<CardItem
						pokeName={pokeName}
						id="flavor-text"
						content={speciesData.flavor_text_entries}
					/>
				</>
			)}
		</PokemonCardSty>
	);
};

export default PokemonCard;
