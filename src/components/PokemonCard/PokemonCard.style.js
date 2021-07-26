import styled from 'styled-components';

const PokemonCardSty = styled.div`
	width: ${(props) => (!props.showSingle ? '220px' : '100%')};
	height: ${(props) => (!props.showSingle ? '240px' : '100%')};
	margin: 0 auto 1.5rem auto;
	border: 1px solid black;
	border-radius: 12px;
	letter-spacing: 3px;
	background-color: white;
	display: grid;
	grid-template-rows: ${(props) =>
		!props.showSingle ? '10% 80% 10%' : 'auto'};

	:hover {
		cursor: ${(props) => !props.showSingle && 'pointer'};
	}

	@media (min-width: 576px) {
		width: ${(props) => (!props.showSingle ? '220px' : '90%')};
		height: ${(props) => (!props.showSingle ? '240px' : '100%')};
		margin: ${(props) =>
			!props.showSingle ? '0 auto 1.5rem auto' : 'auto'};
		grid-template-columns: ${(props) =>
			!props.showSingle ? 'auto' : '36% 32% 32%'};
		grid-template-rows: ${(props) =>
			!props.showSingle ? '10% 80% 10%' : '10% 10% 10% 10% 10% 50%'};
	}
`;

export default PokemonCardSty;
