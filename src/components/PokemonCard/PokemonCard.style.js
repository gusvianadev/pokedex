import styled from 'styled-components';

const PokemonCardSty = styled.div`
	width: ${(props) => (!props.showSingle ? '220px' : '100%')};
	height: ${(props) => (!props.showSingle ? '240px' : '95%')};
	max-height: 525px;
	margin: ${(props) =>
		!props.showSingle ? '0rem auto 1.5rem auto' : 'auto'};
	border: 2px solid black;
	border-radius: 12px;
	letter-spacing: 3px;
	background-color: white;
	display: grid;
	grid-template-rows: ${(props) =>
		!props.showSingle ? '10% 80% 10%' : 'auto'};

	:hover {
		cursor: ${(props) => !props.showSingle && 'pointer'};
	}

	:focus {
		border: 2px solid red;
		outline: none;
	}

	@media (min-width: 576px) {
		grid-template-columns: ${(props) =>
			!props.showSingle ? 'auto' : '36% 32% 32%'};
		grid-template-rows: ${(props) =>
			!props.showSingle ? '10% 80% 10%' : '10% 10% 10% 10% 10% 50%'};
	}
`;

export default PokemonCardSty;
