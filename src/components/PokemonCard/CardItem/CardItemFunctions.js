import { PokeTypeSty } from "./CardItem.style";

const CardItemFunctions = ({ pokeName, id, content }) => {
	if (id === "number") {
		//? adds leading zero
		return { contentToShow: `#${content.toString().padStart(3, "0")}` };
	} else if (id === "category") {
		const engCategory = content.filter((cat) => cat.language.name === "en");
		return { contentToShow: engCategory[0].genus };
	} else if (id === "types") {
		return {
			contentToShow: content.map((type, i) => (
				<PokeTypeSty
					pokeType={type.type.name}
					key={`${pokeName} type nº ${i + 1}`}
					className="card-poke-type"
				>
					{type.type.name}
				</PokeTypeSty>
			)),
		};
	} else if (id === "height" || id === "weight") {
		const layout = [id, (content * 0.1).toFixed(1)];

		return {
			contentToShow: layout.map((item, i) => (
				<div key={`${id} of ${pokeName} - item ${i + 1}`}>
					{i === 0 ? item : id === "height" ? `${item}m` : `${item}kg`}
				</div>
			)),
		};
	} else if (id === "flavor-text") {
		const engEntries = content.filter((entry) => entry.language.name === "en");

		return {
			contentToShow: <div>{engEntries[engEntries.length - 1].flavor_text}</div>,
		};
	}
	return { contentToShow: content };
};

export default CardItemFunctions;
