import { IoBluetooth } from 'react-icons/io5';
import styled from 'styled-components';

export const Nav = styled.nav`
	/* background-color: #060b26; */
	text-align: center;
	width: 18%;
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

	@media sccreen and (max-width: 960px) {
		width: 18%;
		height: 100%;
		left: ${({ click }) => (click ? 0 : '-100%')};
		transition: all 1s ease;
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	background: black;
	height: 100%;
	opacity: 0.9;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	list-style: none;
	position: relative;
	left: ${({ click }) => (click ? 0 : '-150%')};
`;

export const NavItem1 = styled.li`
	color: white;
	font-size: 25px;
	padding: 25px;
	text-align: center;
	text-decoration: none;
	display: inline-block;

	&:hover {
		color: rgb(179, 134, 0, 0.1);
		border-bottom: 2px solid orange;
		background-image: url('https://i.imgur.com/2lgJuEo.jpg');
		background-position: center;
		background-size: 100% 100%;
		background-repeat: no-repeat;
		padding: 25px;
	}
`;

export const NavItem2 = styled.li`
	color: white;
	font-size: 25px;
	padding: 25px;
	text-align: center;
	text-decoration: none;
	display: inline-block;

	&:hover {
		color: rgb(242, 242, 242, 0.1);
		border-bottom: 2px solid orange;
		background-image: url('https://i.imgur.com/GwchUo8.jpg');
		background-position: center;
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}
`;

export const NavItem3 = styled.li`
	color: white;
	font-size: 25px;
	padding: 25px;
	text-align: center;
	text-decoration: none;
	display: inline-block;

	&:hover {
		color: rgb(242, 242, 242, 0.1);
		border-bottom: 2px solid orange;
		background-image: url('https://i.imgur.com/5KE5BvG.jpg');
		background-position: center;
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}
`;

export const NavItem4 = styled.li`
	color: white;
	font-size: 25px;
	padding: 25px;
	text-align: center;
	text-decoration: none;
	display: inline-block;

	&:hover {
		color: rgb(242, 242, 242, 0.1);
		border-bottom: 2px solid orange;
		background-image: url('https://i.imgur.com/Jelu0H8.jpg');
		background-position: center;
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}
`;

export const NavItem5 = styled.li`
	color: white;
	font-size: 25px;
	padding: 25px;
	text-align: center;
	text-decoration: none;
	display: inline-block;

	&:hover {
		color: rgb(242, 242, 242, 0.1);
		border-bottom: 2px solid orange;
		background-image: url('https://i.imgur.com/2NU0UJs.jpg');
		background-position: center;
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}
`;

export const NavItem6 = styled.li`
	color: white;
	font-size: 25px;
	padding: 25px;
	text-align: center;
	text-decoration: none;
	display: inline-block;

	&:hover {
		color: rgb(242, 242, 242, 0.1);
		border-bottom: 2px solid orange;
		background-image: url('https://i.imgur.com/n5YPqwm.jpg');
		background-position: center;
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}
`;

export const NavItem7 = styled.li`
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
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}
`;

export default Nav;
