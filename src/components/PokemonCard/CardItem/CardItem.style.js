import styled from "styled-components";

export const ItemContainerSty = styled.div`
	overflow: auto;
	display: flex;
	border: 1px solid black;
	padding: ${(props) =>
		props.showSingle &&
		props.typeOfContent !== "sprite" &&
		props.typeOfContent !== "flavor-text" &&
		"0.3rem 0"};
	background-color: ${(props) =>
		props.typeOfContent === "sprite" ? "white" : "var(--clr-blue)"};
	color: white;
	border-radius: ${(props) => {
		const content = props.typeOfContent;
		if (!props.showSingle) {
			return content === "number"
				? "10px 10px 0px 0px"
				: content === "name" && "0px 0px 10px 10px";
		} else {
			return content === "number"
				? "10px 10px 0px 0px"
				: content === "flavor-text" && "0px 0px 10px 10px";
		}
	}};
	background-image: ${(props) =>
		props.typeOfContent === "sprite" &&
		!props.showSingle &&
		"url('https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg')"};
	background-repeat: no-repeat;
	background-position: center;

	@media (min-width: 576px) {
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
		border-left: ${(props) =>
			props.showSingle && props.typeOfContent === "name" && "none"};
		border-right: ${(props) =>
			props.showSingle && props.typeOfContent === "number" && "none"};
		border-radius: ${(props) => {
			const content = props.typeOfContent;
			if (!props.showSingle) {
				return content === "number"
					? "10px 10px 0px 0px"
					: content === "name" && "0px 0px 10px 10px";
			} else {
				return content === "number"
					? "0px 0px 0px 0px"
					: content === "name"
					? "0px 10px 0px 0px"
					: content === "flavor-text"
					? "0px 0px 10px 10px"
					: content === "sprite" && "10px 0px 0px 0px";
			}
		}};
		background-image: ${(props) =>
			props.typeOfContent === "sprite" &&
			"url('https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg')"};
		background-repeat: no-repeat;
		background-position: center;
	}
`;

export const CardItemSty = styled.div`
	display: flex;
	justify-content: ${(props) =>
		props.typeOfContent === "sprite" || !props.showSingle
			? "center"
			: "space-between"};
	width: 100%;
	margin: ${(props) =>
		props.typeOfContent !== "flavor-text" ? "auto 0" : "1rem"};
	padding: ${(props) =>
		props.typeOfContent === "sprite"
			? "0"
			: props.typeOfContent === "flavor-text"
			? "1.5rem 1rem"
			: "0 .5rem"};
	border-radius: ${(props) => props.typeOfContent === "flavor-text" && "10px"};
	-webkit-box-shadow: ${(props) =>
		props.typeOfContent === "flavor-text" &&
		"inset 0.5rem 0px 0px 0.2rem #C72424, inset -0.5rem 0px 0px 0.2rem #C72424"};
	box-shadow: ${(props) =>
		props.typeOfContent === "flavor-text" &&
		"inset 0.5rem 0px 0px 0.2rem #C72424, inset -0.5rem 0px 0px 0.2rem #C72424"};
	background-color: ${(props) =>
		props.typeOfContent === "flavor-text" && "white"};
	color: ${(props) => props.typeOfContent === "flavor-text" && "black"};
	overflow: hidden;

	@media (min-width: 576px) {
		justify-content: ${(props) =>
			props.typeOfContent === "sprite" || !props.showSingle
				? "center"
				: props.typeOfContent === "name"
				? "flex-end"
				: "space-between"};
	}
	& {
		text-transform: ${(props) =>
			props.typeOfContent === "flavor-text" ? "none" : "capitalize"};
	}

	& * {
		overflow-y: auto;
		overflow-x: hidden;
	}
`;

const colorPerType = {
	normal: "#bdbdae",
	fire: "#f95442",
	fighting: "#707070",
	water: "#55aeff",
	flying: "#79a4ff",
	grass: "#8bd650",
	poison: "#aa5da1",
	electric: "#fee93f",
	ground: "#edcb56",
	psychic: "#fa65b5",
	rock: "#cdbc72",
	ice: "#96f1ff",
	bug: "#c2d21f",
	dragon: "#8975ff",
	ghost: "#7874d4",
	dark: "#8e6956",
	steel: "#c4c2db",
	fairy: "#f9adff",
};

export const PokeTypeSty = styled.div`
	background-color: ${(props) => colorPerType[props.pokeType]};
	border-radius: 5px;
	width: 125px;
	padding: 2px;
	text-align: center;
	border: 2px solid black;
	text-shadow: 2px 2px 0px black;
	-webkit-box-shadow: inset 0px -0.5rem 0px 0px rgba(0, 0, 0, 0.3);
	box-shadow: inset 0px -0.5rem 0px 0px rgba(0, 0, 0, 0.3);
`;
