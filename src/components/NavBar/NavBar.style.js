import styled from 'styled-components';

const NavBarSty = styled.div`
	display: flex;
	justify-content: space-between;
	padding-right: 0.2rem;

	& > :nth-child(2) {
		margin: auto 2rem auto auto;
	}
`;

export default NavBarSty;
