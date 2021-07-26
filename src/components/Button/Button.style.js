import styled from 'styled-components';

const ButtonSty = styled.button`
	width: ${(props) => props.props.width};
	max-width: ${(props) => props.props.maxWidth};
	padding: ${(props) => props.props.padding};
	margin: 0 auto;
	display: flex;
	-webkit-box-shadow: inset 0px 0px 10px 1px var(--clr-yellow-shadow),
		4px 4px 3px -1px black;
	box-shadow: inset 0px 0px 10px 1px var(--clr-yellow-shadow),
		4px 4px 3px -1px black;
	border: 3px solid var(--clr-blue);
	border-radius: 7px;
	background-color: var(--clr-yellow);
	transition: all 0.1s ease;

	:active {
		transform: translate(1px, 1px);
		-webkit-box-shadow: inset 0px 0px 10px 1px var(--clr-yellow-shadow),
			3px 3px 2px -2px black;
		box-shadow: inset 0px 0px 10px 1px var(--clr-yellow-shadow),
			3px 3px 2px -2px black;
	}

	:hover {
		cursor: pointer;
	}

	& :first-child {
		margin: auto;
		color: var(--clr-blue);
		text-align: center;
		text-transform: uppercase;
	}
`;

export default ButtonSty;
