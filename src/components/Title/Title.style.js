import styled from "styled-components";

export const TitleSty = styled.h1`
	width: 95%;
	display: block;
	margin: auto;
	font-family: "Pokémon Solid", Arial, Helvetica, sans-serif;
	font-size: 4.5em;
	text-align: center;
	text-shadow: 4px 4px 3px black, 4px 4px 15px black;
	color: var(--clr-yellow);
	-webkit-text-stroke: 3px var(--clr-blue);
	position: relative;
	user-select: none;

	& .title-character {
		display: inline-block;
		margin: 0;
		padding: 0;
		margin-block-start: 0;
		margin-block-end: 0;
		margin-inline-start: 0;
		margin-inline-end: 0;
	}

	& .title-character__on-top {
		position: relative;
	}

	& .title-character-4,
	.title-character-6 {
		transform: rotate(-2deg);
	}
`;
