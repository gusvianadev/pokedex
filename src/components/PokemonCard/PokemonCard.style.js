import styled from "styled-components";

export const PokemonCardSty = styled.div`
	width: ${(props) => (!props.showSingle ? "220px" : "100%")};
	height: ${(props) => (!props.showSingle ? "240px" : "100%")};
	margin: 0 auto 1.5rem auto;
	border: 5px dotted black;
	letter-spacing: 3px;
	display: grid;
	grid-template-rows: ${(props) =>
		!props.showSingle ? "10% 80% 10%" : "auto"};

	@media (min-width: 768px) {
		grid-template-columns: ${(props) =>
			!props.showSingle ? "auto" : "36% 32% 32%"};
		grid-template-rows: ${(props) =>
			!props.showSingle ? "10% 80% 10%" : "10% 10% 10% 10% 10% 50%"};
	}
`;
