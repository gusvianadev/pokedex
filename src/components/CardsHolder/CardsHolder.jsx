import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ImCross } from 'react-icons/im';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import PokemonCard from '../PokemonCard/PokemonCard';
import CardsHolderSty from './CardsHolder.styles';
import LoadingRing from '../LoadingRing/LoadingRing';
import getPokeList from '../../redux/thunkPokeList';
import getSinglePoke from '../../redux/thunkSinglePoke';
import { changeCurrentUrl, setShowSingle } from '../../redux/slicePokeCards';
import Button from '../Button/Button';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

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

	const upperSideBtnStyles = {
		width: '40px',
		minHeight: '25px',
		margin: '0px',
	};
	return (
		<CardsHolderSty
			isLoading={isLoading}
			showSingle={showSingle}
			data-testid="cards-holder"
		>
			{showSingle && !isLoading && !isError && (
				<div className="cards-holder-nav-bar">
					<Button
						aria="button to close the pokemon card and go back to showcase all cards"
						type="button"
						btnStyles={upperSideBtnStyles}
						onClick={() => dispatch(setShowSingle(false))}
						content={<ImCross />}
					/>
					<Button
						aria="button to go to the previous pokemon"
						type="button"
						btnStyles={upperSideBtnStyles}
						onClick={() =>
							dispatch(getSinglePoke(singleCard.pokeData.id - 1))
						}
						content={<BiLeftArrow />}
						disabled={singleCard.pokeData.id === 1}
					/>
					<Button
						aria="button to go to the next pokemon"
						type="button"
						btnStyles={upperSideBtnStyles}
						onClick={() =>
							dispatch(getSinglePoke(singleCard.pokeData.id + 1))
						}
						content={<BiRightArrow />}
						disabled={singleCard.pokeData.id === 898}
					/>
				</div>
			)}
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
				{!isLoading &&
					pokeCards.length !== 0 &&
					!showSingle &&
					!isError && (
						<Button
							aria="search more pokémon button"
							type="button"
							testid="search-more-btn"
							btnStyles={{
								width: '100%',
								maxWidth: '150px',
								padding: '0.5rem 0',
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
