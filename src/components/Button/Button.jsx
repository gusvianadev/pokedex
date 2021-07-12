import { ButtonSty } from "./Button.style";

const Button = ({ content, props }) => {
	return <ButtonSty props={props}>{content}</ButtonSty>;
};

export default Button;
