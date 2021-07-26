import { useSelector } from 'react-redux';
import { CardItemSty, ItemContainerSty } from './CardItem.style';
import CardItemFunctions from './CardItemFunctions';

const CardItem = ({ pokeName, id, content }) => {
	const { contentToShow } = CardItemFunctions({ pokeName, id, content });
	const { showSingle } = useSelector((state) => state.pokeCards);
	return (
		<ItemContainerSty
			showSingle={showSingle}
			typeOfContent={id}
			className={`${id}-container`}
		>
			<CardItemSty
				showSingle={showSingle}
				typeOfContent={id}
				id={`${id}-of-${pokeName}`}
				className={`${id}-item`}
			>
				{contentToShow}
			</CardItemSty>
		</ItemContainerSty>
	);
};

export default CardItem;
