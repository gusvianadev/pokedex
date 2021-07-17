import styled from "styled-components";

export const PokemonSpriteSty = styled.div`
	width: 100%;
	height: 80%;
	background-color: var(--clr-yellow);
	display: flex;

	& img {
		width: ${(props) => (!props.broken ? "80px" : "110px")};
		height: ${(props) => (!props.broken ? "80px" : "110px")};
		margin: auto;
	}
`;
