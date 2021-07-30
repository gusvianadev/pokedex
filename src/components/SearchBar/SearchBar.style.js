import styled from 'styled-components';

const SearchBarSty = styled.form`
	width: 100%;
	max-width: 400px;
	margin: 0.5rem 0 2.5rem 0;
	display: flex;
	justify-content: flex-start;
	padding-right: 0.2rem;
	position: relative;

	& input {
		margin-right: 0.8rem;
		border: ${(props) =>
			!props.warning
				? '3px solid var(--clr-blue)'
				: '3px solid var(--clr-red-dark)'};
		border-radius: 7px;
		background-color: var(--clr-yellow);
		width: 75%;
		-webkit-box-shadow: inset 1px 1px 2px 2px var(--clr-yellow-shadow),
			4px 4px 3px -1px black;
		box-shadow: inset 1px 1px 2px 2px var(--clr-yellow-shadow),
			4px 4px 3px -1px black;
		padding: 5px 10px;

		:focus {
			border: ${(props) =>
				!props.warning
					? '3px solid var(--clr-blue)'
					: '3px solid var(--clr-red-dark)'};
		}

		::placeholder {
			color: var(--clr-blue);
		}
	}

	& button {
		margin: 0 0 0 auto;
	}
`;

export default SearchBarSty;
