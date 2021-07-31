import { CardItemSty, ItemContainerSty } from './CardItem.style';
import CardItemFunctions from './CardItemFunctions';

const CardItem = ({ pokeName, pokeId, cardItem, showSingle }) => {
	const { contentToShow } = CardItemFunctions({
		pokeName,
		pokeId,
		cardItem,
		showSingle,
	});

	return (
		<ItemContainerSty
			showSingle={showSingle}
			typeOfContent={cardItem}
			className={`${cardItem}-container`}
		>
			<CardItemSty
				showSingle={showSingle}
				typeOfContent={cardItem}
				id={`${cardItem}-of-${pokeName}`}
				className={`${cardItem}-item`}
			>
				{contentToShow}
			</CardItemSty>
		</ItemContainerSty>
	);
};

export default CardItem;
