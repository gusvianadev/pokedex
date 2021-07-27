import styled from 'styled-components';

const PokemonSpriteSty = styled.img`
	width: ${(props) => (props.broken ? '200px' : '110px')};
	height: ${(props) => (props.broken ? '200px' : '110px')};
`;

export default PokemonSpriteSty;
