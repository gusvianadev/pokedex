import styled from "styled-components";

export const SearchBarSty = styled.form`
	width: 100%;
	margin: 0 auto;
	display: flex;
	justify-content: flex-start;

	& input {
		margin: 0 0.5rem 0 0;
		border: 3px solid var(--clr-blue);
		border-radius: 7px;
		background-color: var(--clr-yellow);
		width: 75%;
		-webkit-box-shadow: inset 1px 1px 2px 2px var(--clr-yellow-shadow),
			4px 4px 3px -1px black;
		box-shadow: inset 1px 1px 2px 2px var(--clr-yellow-shadow),
			4px 4px 3px -1px black;
		padding: 5px 10px;

		::placeholder {
			color: var(--clr-blue);
		}
	}

	& button {
		margin: 0 0 0 auto;
	}
`;
