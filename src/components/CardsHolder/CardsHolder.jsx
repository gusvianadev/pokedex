import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
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
		allPokes,
		pokeCards,
		singleCard,
	} = useSelector((state) => state.pokeCards);
	const dispatch = useDispatch();
	const cardsHolderRef = useRef(0);
	const [scrollTopPosition, setScrollTopPosition] = useState('');

	useEffect(() => {
		fetchMore && !isLoading && dispatch(getPokeList(currentUrl));
		!showSingle && cardsHolderRef.current.scroll(0, scrollTopPosition);
	}, [
		dispatch,
		fetchMore,
		isLoading,
		currentUrl,
		showSingle,
		cardsHolderRef,
	]);

	const upperSideBtnStyles = {
		width: '40px',
		minHeight: '25px',
		margin: '0px',
	};

	return (
		<CardsHolderSty
			isLoading={isLoading}
			showSingle={showSingle}
			ref={cardsHolderRef}
		>
			{showSingle && (
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
							dispatch(
								getSinglePoke(singleCard.speciesData.id - 1)
							)
						}
						content={<BiLeftArrow />}
						disabled={
							isLoading ||
							isError ||
							singleCard.speciesData.id === 1
						}
						isLoading={isLoading}
					/>
					<Button
						aria="button to go to the next pokemon"
						type="button"
						btnStyles={upperSideBtnStyles}
						onClick={() =>
							dispatch(
								getSinglePoke(singleCard.speciesData.id + 1)
							)
						}
						content={<BiRightArrow />}
						disabled={
							isLoading ||
							isError ||
							singleCard.speciesData.id === 898
						}
						isLoading={isLoading}
					/>
				</div>
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
			<div className="container ldn-ring-container">
				{isLoading && <LoadingRing />}
			</div>
			<div className="container button-container">
				{!isLoading &&
					pokeCards.length !== 0 &&
					!showSingle &&
					!isError && (
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
							content={<p>more+</p>}
						/>
					)}
			</div>
		</CardsHolderSty>
	);
};

export default CardsHolder;
