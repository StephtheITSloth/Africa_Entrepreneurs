import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
	Nav,
	NavMenu,
	NavItem1,
	NavItem2,
	NavItem3,
	NavItem4,
	NavItem5,
	NavItem6,
	NavBarMenu,
} from './NavbarStyle';
import { IoMenu } from 'react-icons/io5';

const Navbar = () => {
	const [click, setClick] = useState();

	const handleClick = () => {
		setClick(!click);
	};

	// const showNav = () => {
	// 	if
	// }

	return (
		<>
			<Nav>
				<button onClick={handleClick}>
					<IoMenu />
				</button>
				<NavMenu onClick={handleClick} click={click}>
					<Link to='/home'>
						<NavItem1>Home</NavItem1>
					</Link>
					<Link to='/about'>
						<NavItem2>About</NavItem2>
					</Link>
					<Link to='/business'>
						<NavItem3>Business</NavItem3>
					</Link>
					<Link to='/review'>
						<NavItem4>Reviews</NavItem4>
					</Link>
					<Link to='/account'>
						<NavItem5>Account</NavItem5>
					</Link>
					<Link to='/contact'>
						<NavItem6>Contact</NavItem6>
					</Link>
				</NavMenu>
			</Nav>


		</>
	);
};
export default Navbar;
