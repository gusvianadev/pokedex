import styled from "styled-components";

export const PokemonSpriteSty = styled.img`
	width: ${(props) => (!props.broken ? "80px" : "110px")};
	height: ${(props) => (!props.broken ? "80px" : "110px")};
	background-color: yellow;
`;
