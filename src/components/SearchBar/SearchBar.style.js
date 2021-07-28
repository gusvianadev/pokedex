import styled from 'styled-components';

const SearchBarSty = styled.form`
	width: 100%;
	margin: 0 auto;
	display: flex;
	justify-content: flex-start;
	padding-right: 0.2rem;
	position: relative;

	& input {
		margin: 0 0.5rem 0 0;
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

		::placeholder {
			color: var(--clr-blue);
		}
	}

	& .search-bar-possible-matches {
		position: absolute;
		top: 2.5rem;
		width: 100%;
		max-width: 300px;
		max-height: 15rem;
		overflow-y: auto;
		overflow-x: hidden;
		background-color: var(--clr-yellow);
		border-radius: 10px;
		border: 5px solid black;

		& > * {
			display: flex;
			margin: 0.5rem 0;
			background-color: var(--clr-blue);
			border-top: 2px solid black;
			border-bottom: 2px solid black;
			color: white;
			width: 100%;
			padding: 2px;
			cursor: pointer;

			& > * {
				pointer-events: none;
			}
			& img {
				width: 65px;
				height: 65px;
			}

			& .match-name {
				width: fit-content;
				height: fit-content;
				font-size: 0.7em;
				margin: auto 0;
				text-transform: capitalize;
			}
		}
	}

	& button {
		margin: 0 0 0 auto;
	}
`;

export default SearchBarSty;
