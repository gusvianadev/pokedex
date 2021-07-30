import ButtonSty from './Button.style';

const Button = ({
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
		onClick={onClick}
		props={btnStyles}
		disabled={disabled}
		isLoading={isLoading}
	>
		{content}
	</ButtonSty>
);
export default Button;
