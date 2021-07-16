import { ButtonSty } from "./Button.style";

const Button = ({ testid, aria, styles, onClick, content }) => {
	return (
		<ButtonSty
			aria-label={aria}
			data-testid={testid}
			onClick={onClick}
			props={styles}
		>
			{content}
		</ButtonSty>
	);
};

export default Button;
