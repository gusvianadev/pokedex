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
	-webkit-box-shadow: inset 3px 3px 2px 2px #3f3f3f, 5px 5px 0px -1px #3a3a3a;
	box-shadow: inset 3px 3px 2px 2px #3f3f3f, 5px 5px 0px -1px #3a3a3a;
`;
