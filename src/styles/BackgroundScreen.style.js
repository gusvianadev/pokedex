import styled from "styled-components";
import backgroundSquarePattern from "../assets/images/background-square-pattern.png";

export const BackgroundScreenSty = styled.div`
	position: relative;
	width: 97%;
	max-width: 768px;
	margin: 0 auto 2rem auto;
	padding: ${(props) => props.padding || 0};
	border-radius: 15px;
	background-image: url(${backgroundSquarePattern});
	-webkit-box-shadow: inset 5px 5px 2px 2px #6f6f6f, 5px 5px 2px 2px #5b0000;
	box-shadow: inset 5px 5px 2px 2px #6f6f6f, 5px 5px 2px 2px #5b0000;

	:before {
		content: "";
		position: absolute;
		border-radius: inherit;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		pointer-events: none;
		-webkit-box-shadow: inset 0px 0px 39px -9px #000000;
		box-shadow: inset 0px 0px 39px -9px #000000;
	}
`;
