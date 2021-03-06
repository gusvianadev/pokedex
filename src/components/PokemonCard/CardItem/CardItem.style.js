import styled from 'styled-components';

export const ItemContainerSty = styled.div`
	overflow-y: ${(props) =>
		props.typeOfContent === 'flavor-text' ? 'auto' : 'hidden'};
	overflow-x: auto;
	display: flex;
	border: 1px solid black;
	padding: ${(props) =>
		props.showSingle &&
		props.typeOfContent !== 'sprite' &&
		props.typeOfContent !== 'flavor-text' &&
		'0.3rem 0'};
	background-color: ${(props) =>
		props.typeOfContent === 'sprite' ? 'white' : 'var(--clr-blue)'};
	color: white;
	border-radius: ${(props) => {
		const content = props.typeOfContent;
		if (!props.showSingle) {
			return content === 'poke-id'
				? '10px 10px 0px 0px'
				: content === 'poke-name' && '0px 0px 10px 10px';
		}
		return content === 'poke-id'
			? '10px 10px 0px 0px'
			: content === 'flavor-text' && '0px 0px 10px 10px';
	}};
	background-image: ${(props) =>
		props.typeOfContent === 'sprite' &&
		!props.showSingle &&
		"url('https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg')"};
	background-repeat: no-repeat;
	background-position: center;

	@media (min-width: 576px) {
		grid-column: ${(props) => {
			const content = props.typeOfContent;
			const single = props.showSingle;

			if (!single) {
				return 'auto';
			}
			switch (content) {
				case 'sprite':
					return '1/2';
				case 'poke-id':
					return '2/3';
				case 'poke-name':
					return '3/4';
				case 'flavor-text':
					return '1/4';

				default:
					return '2/4';
			}
		}};
		grid-row: ${(props) => {
			const content = props.typeOfContent;
			const single = props.showSingle;

			if (!single) {
				return 'auto';
			}
			switch (content) {
				case 'sprite':
					return '1/6';
				case 'poke-id':
				case 'poke-name':
					return '1/2';
				case 'category':
					return '2/3';
				case 'types':
					return '3/4';
				case 'height':
					return '4/5';
				case 'weight':
					return '5/6';
				default:
					return '6/7';
			}
		}};
		border-left: ${(props) =>
			props.showSingle && props.typeOfContent === 'poke-name' && 'none'};
		border-right: ${(props) =>
			props.showSingle && props.typeOfContent === 'poke-id' && 'none'};
		border-radius: ${(props) => {
			const content = props.typeOfContent;
			if (!props.showSingle) {
				return content === 'poke-id'
					? '10px 10px 0px 0px'
					: content === 'poke-name' && '0px 0px 10px 10px';
			}
			switch (content) {
				case 'poke-name':
					return '0px 10px 0px 0px';
				case 'flavor-text':
					return '0px 0px 10px 10px';
				case 'sprite':
					return '10px 0px 0px 0px';
				default:
					return '0px';
			}
		}};
		background-image: ${(props) =>
			props.typeOfContent === 'sprite' &&
			"url('https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg')"};
		background-repeat: no-repeat;
		background-position: center;
	}
`;

export const CardItemSty = styled.div`
	display: flex;
	justify-content: ${(props) =>
		props.typeOfContent === 'sprite' || !props.showSingle
			? 'center'
			: 'space-between'};
	width: 100%;
	margin: ${(props) =>
		props.typeOfContent !== 'flavor-text' ? 'auto 0' : '1rem'};
	padding: ${(props) => {
		switch (props.typeOfContent) {
			case 'sprite':
				return '0';
			case 'flavor-text':
				return '0.4rem 1rem';
			default:
				return '0 0.5rem';
		}
	}};
	border-radius: ${(props) => props.typeOfContent === 'flavor-text' && '10px'};
	-webkit-box-shadow: ${(props) =>
		props.typeOfContent === 'flavor-text' &&
		'inset 0.5rem 0px 0px 0.2rem #C72424, inset -0.5rem 0px 0px 0.2rem #C72424'};
	box-shadow: ${(props) =>
		props.typeOfContent === 'flavor-text' &&
		'inset 0.5rem 0px 0px 0.2rem #C72424, inset -0.5rem 0px 0px 0.2rem #C72424'};
	background-color: ${(props) =>
		props.typeOfContent === 'flavor-text' && 'white'};
	color: ${(props) => props.typeOfContent === 'flavor-text' && 'black'};
	overflow: hidden;

	& {
		text-transform: ${(props) =>
			props.typeOfContent === 'flavor-text' ? 'none' : 'capitalize'};
	}

	& * {
	overflow-y: ${(props) => props.typeOfContent === 'flavor-text' && 'auto'};
		overflow-x: hidden;
	}

	@media (min-width: 576px) {
		justify-content: ${(props) => {
			if (props.typeOfContent === 'sprite' || !props.showSingle) {
				return 'center';
			}
			if (props.typeOfContent === 'poke-name') {
				return 'flex-end';
			}
			return 'space-between';
		}}
`;

const colorPerType = {
	normal: '#bdbdae',
	fire: '#f95442',
	fighting: '#707070',
	water: '#55aeff',
	flying: '#79a4ff',
	grass: '#8bd650',
	poison: '#aa5da1',
	electric: '#fee93f',
	ground: '#edcb56',
	psychic: '#fa65b5',
	rock: '#cdbc72',
	ice: '#96f1ff',
	bug: '#c2d21f',
	dragon: '#8975ff',
	ghost: '#7874d4',
	dark: '#8e6956',
	steel: '#c4c2db',
	fairy: '#f9adff',
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
