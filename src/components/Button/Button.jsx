import ButtonSty from './Button.style';

const Button = ({ testid, aria, type, styles, onClick, content }) => (
	<ButtonSty
		type={type}
		aria-label={aria}
		data-testid={testid}
		onClick={onClick}
		props={styles}
	>
		{content}
	</ButtonSty>
);
export default Button;
