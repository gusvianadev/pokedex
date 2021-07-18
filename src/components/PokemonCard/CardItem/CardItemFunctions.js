const CardItemFunctions = ({ id, content }) => {
	if (id === "number") {
		return { contentToShow: `#${content.toString().padStart(3, "0")}` };
	} else if (id === "category") {
		const engCategory = content.filter((cat) => cat.language.name === "en");
		return { contentToShow: engCategory[0].genus };
	} else if (id === "types") {
		return { contentToShow: content.map((type) => type.type.name) };
	} else if (id === "height" || id === "weight") {
		return { contentToShow: `${id}: ${(content * 0.1).toFixed(1)}` };
	} else if (id === "flavor-text") {
		const engEntries = content.filter((entry) => entry.language.name === "en");

		return { contentToShow: engEntries[engEntries.length - 1].flavor_text };
	}
	return { contentToShow: content };
};

export default CardItemFunctions;
