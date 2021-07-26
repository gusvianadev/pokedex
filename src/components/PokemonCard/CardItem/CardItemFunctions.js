import { PokeTypeSty } from './CardItem.style';

const CardItemFunctions = ({ pokeName, id, content }) => {
	if (id === 'number') {
		// adds leading zero
		return { contentToShow: `#${content.toString().padStart(3, '0')}` };
	}
	if (id === 'category') {
		const engCategory = content.filter((cat) => cat.language.name === 'en');
		return { contentToShow: engCategory[0].genus };
	}
	if (id === 'types') {
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
	}
	if (id === 'height' || id === 'weight') {
		const layout = [id, (content * 0.1).toFixed(1)];
		const toRender = (item, i) => {
			if (i === 0) {
				return item;
			}
			if (id === 'height') {
				return `${item}m`;
			}
			return `${item}kg`;
		};
		return {
			contentToShow: layout.map((item, i) => (
				<div key={`${id} of ${pokeName} - item ${i + 1}`}>
					{toRender(item, i)}
				</div>
			)),
		};
	}
	if (id === 'flavor-text') {
		const engEntries = content.filter(
			(entry) => entry.language.name === 'en'
		);

		return {
			contentToShow: (
				<div>{engEntries[engEntries.length - 1].flavor_text}</div>
			),
		};
	}
	return { contentToShow: content };
};

export default CardItemFunctions;
