import { IoBluetooth } from 'react-icons/io5';
import styled from 'styled-components';


export const Nav = styled.nav`
	/* background-color: #060b26; */
	text-align: center;
	width: 23%;
	height: 100%;
	display: block;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	font-size: 10px;
	position: sticky;
	color: #f2f2f2;
	list-style: none;
	z-index: 1;

	@media sccreen and (max-width: 960px){
		
		
				left: ${({ click }) => (click ? 0 : '-100%')};
				transition: all 1s ease;
	}
	
`;



export const NavMenu = styled.ul`
	display: flex;
	background: black;
	
	opacity: 0.9;
	flex-direction: column;
	align-items: flex-start;
	list-style: none;
	position: absolute;
	left: ${({ click }) => (click ? 0 : '-100%')};

	&:hover {
	}
`;

export const NavItem = styled.li`
	color: white;
	font-size: 25px;
	padding: 25px;
	text-align: center;
	text-decoration: none;
	display: inline-block;

	&:hover {
		border-bottom: 2px solid orange;
		background-color: #d9f2d9;
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
	}
`;

export default Nav;
