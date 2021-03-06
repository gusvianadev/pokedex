import styled from 'styled-components';

const ErrorMessageContainerSty = styled.div`
	width: 100%;
	height: 100%;
	display: flex;

	& .error-message {
		width: ${(props) =>
			props.errMessSty ? props.errMessSty.width : 'fit-content'};
		height: fit-content;
		margin: auto;
		background-color: gray;
	}
`;

export default ErrorMessageContainerSty;
