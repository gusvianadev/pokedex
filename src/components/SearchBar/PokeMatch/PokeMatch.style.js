import styled from 'styled-components';

const PokeMatchSty = styled.div`
	display: flex;
	margin: 0.5rem 0;
	background-color: var(--clr-blue);
	border-top: 2px solid black;
	border-bottom: 2px solid black;
	color: white;
	width: 100%;
	padding: 2px;
	cursor: pointer;

	:focus {
		border: none;
		border-top: 3px solid red;
		border-bottom: 3px solid darkred;
	}

	& img {
		pointer-events: none;
	}
	.poke-match-name {
		width: fit-content;
		height: fit-content;
		font-size: 0.7em;
		margin: auto 0;
		text-transform: capitalize;
		pointer-events: none;
	}
`;

export default PokeMatchSty;
