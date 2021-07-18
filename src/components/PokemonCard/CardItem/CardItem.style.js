import styled from "styled-components";

export const ItemContainerSty = styled.div`
	background-color: lightgray;
	/* outline: 2px solid red; */
	overflow: auto;

	@media (min-width: 768px) {
		grid-column: ${(props) => {
			const content = props.typeOfContent;
			const single = props.showSingle;

			if (!single) {
				return "auto";
			} else {
				return content === "sprite"
					? "1/2"
					: content === "number"
					? "2/3"
					: content === "name"
					? "3/4"
					: content === "flavor-text"
					? "1/4"
					: "2/4";
			}
		}};
		grid-row: ${(props) => {
			const content = props.typeOfContent;
			const single = props.showSingle;

			if (!single) {
				return "auto";
			} else {
				return content === "sprite"
					? "1/6"
					: content === "number" || content === "name"
					? "1/2"
					: content === "category"
					? "2/3"
					: content === "types"
					? "3/4"
					: content === "height"
					? "4/5"
					: content === "weight"
					? "5/6"
					: "6/7";
			}
		}};
	}
`;

export const CardItemSty = styled.div`
	& .card-poke-type {
		display: inline-block;
	}
`;
