import { useSelector } from "react-redux";
import { CardItemSty, ItemContainerSty } from "./CardItem.style";
import CardItemFunctions from "./CardItemFunctions";

const CardItem = ({ pokeName, id, content }) => {
	// const colorPerType = {
	// 	normal: "#bdbdae",
	// 	fire: "#f95442",
	// 	fighting: "#707070",
	// 	water: "#55aeff",
	// 	flying: "#79a4ff",
	// 	grass: "#8bd650",
	// 	poison: "#aa5da1",
	// 	electric: "#fee93f",
	// 	ground: "#edcb56",
	// 	psychic: "#fa65b5",
	// 	rock: "#cdbc72",
	// 	ice: "#96f1ff",
	// 	bug: "#c2d21f",
	// 	dragon: "#8975ff",
	// 	ghost: "#7874d4",
	// 	dark: "#8e6956",
	// 	steel: "#c4c2db",
	// 	fairy: "#f9adff",
	const { contentToShow } = CardItemFunctions({ id, content });
	const { showSingle } = useSelector((state) => state.pokeCards);
	return (
		<ItemContainerSty showSingle={showSingle} typeOfContent={id}>
			<CardItemSty typeOfContent={id} id={`${id}-of-${pokeName}`}>
				{id === "types"
					? contentToShow.map((type, i) => (
							<div key={`${pokeName} type nº ${i}`} className="card-poke-type">
								{type}
							</div>
					  ))
					: contentToShow}
			</CardItemSty>
		</ItemContainerSty>
	);
};

export default CardItem;
