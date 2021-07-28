import ButtonSty from './Button.style';

const Button = ({
	testid,
	aria,
	type,
	btnStyles,
	onClick,
	content,
	disabled,
	isLoading,
}) => (
	<ButtonSty
		type={type}
		aria-label={aria}
		data-testid={testid}
		onClick={onClick}
		props={btnStyles}
		disabled={disabled}
		isLoading={isLoading}
	>
		{content}
	</ButtonSty>
);
export default Button;
