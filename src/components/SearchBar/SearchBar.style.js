import styled from "styled-components";

export const SearchBarSty = styled.form`
	width: 100%;
	max-width: 500px;
	margin: 0 auto;
	display: flex;

	& input {
		margin: 0 auto;
		border: 3px solid var(--clr-blue);
		border-radius: 7px;
		background-color: var(--clr-yellow);
		width: 65%;
		-webkit-box-shadow: inset 1px 1px 2px 2px var(--clr-yellow-shadow),
			4px 4px 3px -1px black;
		box-shadow: inset 1px 1px 2px 2px var(--clr-yellow-shadow),
			4px 4px 3px -1px black;
		padding: 5px 10px;
	}
`;
