import styled from "styled-components";

export const SearchBarSty = styled.div`
	& input,
	button {
		border: 3px solid var(--clr-blue);
		border-radius: 5px;
		background-color: var(--clr-yellow);
	}

	& input {
		box-shadow: inset -2px -2px 3px 2px var(--clr-yellow-dark);
	}

	& button {
	}
`;
