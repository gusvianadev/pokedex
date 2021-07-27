import ButtonSty from './Button.style';

const Button = ({
	testid,
	aria,
	type,
	btnStyles,
	onClick,
	content,
	disabled,
}) => (
	<ButtonSty
		type={type}
		aria-label={aria}
		data-testid={testid}
		onClick={onClick}
		props={btnStyles}
		disabled={disabled}
	>
		{content}
	</ButtonSty>
);
export default Button;
