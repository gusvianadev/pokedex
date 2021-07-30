import ErrorMessageContainerSty from './ErrorMessage.style';

const ErrorMessage = ({ content, errMessSty }) => (
	<ErrorMessageContainerSty errMessSty={errMessSty}>
		<div className="error-message">{content}</div>
	</ErrorMessageContainerSty>
);
export default ErrorMessage;
