const PropsDestructuring = (cardInfo) => {
	const { pokeName, basicData, speciesData } = cardInfo;
	const sprite = basicData.sprites.other.dream_world.front_default;
	const id = basicData.id.toString().padStart(3, "0");
	const color = speciesData.color.name;

	return {
		pokeName,
		sprite,
		id,
		color,
	};
};

export default PropsDestructuring;
