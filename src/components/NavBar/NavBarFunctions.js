import { useDispatch } from 'react-redux';
import { ImCross } from 'react-icons/im';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import { setShowSingle } from '../../redux/slicePokeCards';
import getSinglePoke from '../../redux/thunkSinglePoke';

const NavBarFunctions = ({ singleCard, isLoading, isError }) => {
	const dispatch = useDispatch();
	const buttonsToRender = [
		{
			aria: 'button to close the pokemon card and go back to showcase all cards',
			onClick: () => dispatch(setShowSingle(false)),
			content: <ImCross />,
			disabled: isLoading,
		},
		{
			aria: 'button to go to the previous pokemon',
			onClick: () =>
				dispatch(getSinglePoke(singleCard.speciesData.id - 1)),
			content: <BiLeftArrow />,
			disabled: isLoading || isError || singleCard.speciesData.id === 1,
		},
		{
			aria: 'button to go to the next pokemon',
			onClick: () =>
				dispatch(getSinglePoke(singleCard.speciesData.id + 1)),
			content: <BiRightArrow />,
			disabled: isLoading || isError || singleCard.speciesData.id === 898,
		},
	];
	return { buttonsToRender };
};

export default NavBarFunctions;
