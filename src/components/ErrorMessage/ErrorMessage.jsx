import { ErrorMessageContainerSty } from "./ErrorMessage.style";

const ErrorMessage = () => {
	return (
		<ErrorMessageContainerSty>
			<div className="error-message">
				Sorry, we couldn't find what you're looking for ☹
			</div>
		</ErrorMessageContainerSty>
	);
};

export default ErrorMessage;
