const FallbackSrc = (setBrokenSrc, id) => {
	const addDefaultSrc = (e) => {
		e.target.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
		setBrokenSrc(true);
	};
	return { addDefaultSrc };
};

export default FallbackSrc;
