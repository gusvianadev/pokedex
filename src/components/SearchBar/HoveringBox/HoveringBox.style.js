import styled from 'styled-components';

const HoveringBoxSty = styled.div`
	display: ${(props) => props.setDisplay};
	position: absolute;
	top: 2.5rem;
	width: 100%;
	max-height: 15rem;
	overflow-y: auto;
	overflow-x: hidden;
	border-radius: 7px;
	border: 3px solid var(--clr-blue);
	background-color: var(--clr-yellow);
	-webkit-box-shadow: inset 1px 1px 2px 2px var(--clr-yellow-shadow),
		4px 4px 3px -1px black;
	box-shadow: inset 1px 1px 2px 2px var(--clr-yellow-shadow),
		4px 4px 3px -1px black;
`;

export default HoveringBoxSty;
