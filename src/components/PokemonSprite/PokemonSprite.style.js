import styled from 'styled-components';

const PokemonSpriteSty = styled.img`
	width: ${(props) => props.spriteStyles.width};
	height: ${(props) => props.spriteStyles.height};
`;

export default PokemonSpriteSty;
