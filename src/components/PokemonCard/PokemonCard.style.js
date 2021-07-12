import styled from "styled-components";

const pokemonColors = {
	black: {
		color: "#000000",
		text: "#FFFFFF",
	},
	blue: {
		color: "#5287F5",
		text: "#000000",
	},
	brown: {
		color: "#FFA024",
		text: "#000000",
	},
	gray: {
		color: "#949494",
		text: "#000000",
	},
	green: {
		color: "#189420",
		text: "#000000",
	},
	pink: {
		color: "#ED2AF7",
		text: "#FFFFFF",
	},
	purple: {
		color: "#6917B0",
		text: "#FFFFFF",
	},
	red: {
		color: "#D10210",
		text: "#000000",
	},
	white: {
		color: "#FFFFFF",
		text: "#000000",
	},
	yellow: {
		color: "#F0D431",
		text: "#000000",
	},
};

export const PokemonCardSty = styled.div`
	width: 200px;
	height: 230px;
	margin: 0 auto 1.5rem auto;
	display: flex;
	flex-direction: column;
	border: 3px dotted black;
	background-color: ${(props) =>
		!props.pokemonColor ? "auto" : pokemonColors[props.pokemonColor].color};
	color: ${(props) =>
		!props.pokemonColor ? "auto" : pokemonColors[props.pokemonColor].text};
`;
