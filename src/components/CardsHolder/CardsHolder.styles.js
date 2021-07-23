import styled from 'styled-components';

export const CardsHolderSty = styled.div`
	width: 100%;
	height: 65vh;
	min-height: 500px;
	max-height: 700px;
	overflow-y: auto;
	overflow-x: hidden;
	margin: 1rem 0;
	display: flex;
	flex-direction: column;
	padding-bottom: 0.3rem;

	& .container {
		width: 100%;
	}

	& .cards {
		width: 100%;
		height: ${(props) => (props.showSingle && !props.isLoading ? '100%' : 'fit-content')};
		display: flex;
		flex-wrap: wrap;
	}

	& .ldn-ring-container {
		display: flex;
		margin: auto;

		& .ldn-ring {
			margin: auto;
		}
	}
`;
