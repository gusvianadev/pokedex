import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import PokemonCard from '../PokemonCard/PokemonCard';
import CardsHolderSty from './CardsHolder.styles';
import LoadingRing from '../LoadingRing/LoadingRing';
import getPokeList from '../../redux/thunkPokeList';
import { changeCurrentUrl, setShowSingle } from '../../redux/slicePokeCards';
import Button from '../Button/Button';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import NavBar from '../PokemonCard/NavBar/NavBar';

const CardsHolder = () => {
	const {
		currentUrl,
		nextUrl,
		fetchMore,
		showSingle,
		isLoading,
		isError,
		pokeCards,
		singleCard,
	} = useSelector((state) => state.pokeCards);
	const dispatch = useDispatch();

	useEffect(() => {
		fetchMore && !isLoading && dispatch(getPokeList(currentUrl));
	}, [dispatch, fetchMore, isLoading, currentUrl]);

	return (
		<CardsHolderSty
			isLoading={isLoading}
			showSingle={showSingle}
			data-testid="cards-holder"
		>
			{showSingle && <NavBar />}
			{isError && <ErrorMessage />}
			<div data-testid="cards-container" className="container cards">
				{!showSingle && !isError
					? pokeCards.map((name, i) => (
							<PokemonCard
								key={name}
								pokeName={name}
								id={i + 1}
							/>
					  ))
					: !isLoading &&
					  !isError && (
							<PokemonCard
								pokeName={singleCard.pokeData.name}
								id={singleCard.pokeData.id}
							/>
					  )}
			</div>
			<div className="container ldn-ring-container">
				{isLoading && <LoadingRing data-testid="ldn-ring" />}
			</div>
			<div className="container button-container">
				{/* the pokeCards.length is to make sure that
                    the button is not rendered until I have at
                    least the first chunk of cards
                */}
				{!isLoading &&
					pokeCards.length !== 0 &&
					!showSingle &&
					!isError && (
						<Button
							aria="search more pokémon button"
							type="button"
							testid="search-more-btn"
							styles={{
								width: '100%',
								maxWidth: '150px',
								padding: '.5rem 0',
							}}
							onClick={() => dispatch(changeCurrentUrl(nextUrl))}
							content={<p>more+</p>}
						/>
					)}
			</div>
		</CardsHolderSty>
	);
};

export default CardsHolder;
