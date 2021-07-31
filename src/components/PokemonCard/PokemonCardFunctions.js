import { useDispatch } from 'react-redux';
import { setShowSingle } from '../../redux/slicePokeCards';
import getSinglePoke from '../../redux/thunkSinglePoke';

const PokemonCardFunctions = ({
	pokeName,
	setScrollTopPosition,
	cardsHolderRef,
}) => {
	const dispatch = useDispatch();
	const handleShowCard = () =>
		dispatch(getSinglePoke(pokeName)) &&
		setScrollTopPosition(cardsHolderRef.current.scrollTop) &&
		dispatch(setShowSingle(true));

	return { handleShowCard };
};

export default PokemonCardFunctions;
