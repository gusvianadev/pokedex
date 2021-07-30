import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import PokemonCard from '../PokemonCard/PokemonCard';
import CardsHolderSty from './CardsHolder.styles';
import LoadingRing from '../LoadingRing/LoadingRing';
import getPokeList from '../../redux/thunkPokeList';
import { changeCurrentUrl } from '../../redux/slicePokeCards';
import Button from '../Button/Button';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import NavBar from '../NavBar/NavBar';

const CardsHolder = () => {
	const {
		currentUrl,
		nextUrl,
		fetchMore,
		showSingle,
		isLoading,
		isError,
		allPokes,
		pokeCards,
		singleCard,
	} = useSelector((state) => state.pokeCards);
	const dispatch = useDispatch();
	const cardsHolderRef = useRef(null);
	const [scrollTopPosition, setScrollTopPosition] = useState(0);

	useEffect(() => {
		fetchMore && !isLoading && dispatch(getPokeList(currentUrl));
		!showSingle && cardsHolderRef.current.scroll(0, scrollTopPosition);
	}, [fetchMore, isLoading, currentUrl, showSingle]);

	return (
		<CardsHolderSty
			isLoading={isLoading}
			showSingle={showSingle}
			ref={cardsHolderRef}
		>
			{showSingle && (
				<NavBar
					singleCard={singleCard}
					isLoading={isLoading}
					isError={isError}
				/>
			)}
			{isError && (
				<ErrorMessage
					content="Sorry, we couldn't find what you're looking for ☹
" // I hate you Prettier why is that quote alone please get back her with her friends
				/>
			)}
			<div className="container cards">
				{!showSingle && !isError
					? pokeCards.map((name, i) => (
							<PokemonCard
								key={name}
								pokeName={name}
								id={allPokes[i].id}
								setScrollTopPosition={setScrollTopPosition}
								cardsHolderRef={cardsHolderRef}
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
			{isLoading && (
				<div className="container ldn-ring-container">
					<LoadingRing />
				</div>
			)}

			{!isLoading && pokeCards.length !== 0 && !showSingle && !isError && (
				<div className="container button-container">
					<Button
						aria="search more pokémon button"
						type="button"
						btnStyles={{
							width: '100%',
							maxWidth: '150px',
							padding: '0.5rem 0',
						}}
						onClick={() =>
							dispatch(changeCurrentUrl(nextUrl)) &&
							setScrollTopPosition(
								cardsHolderRef.current.scrollTop
							)
						}
						content={<p>more</p>}
					/>
				</div>
			)}
		</CardsHolderSty>
	);
};

export default CardsHolder;
