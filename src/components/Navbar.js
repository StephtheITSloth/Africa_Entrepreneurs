import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavMenu, NavItem, NavBarMenu } from './NavbarStyle';
import { IoMenu } from 'react-icons/io5';

const Navbar = () => {
	const [click, setClick] = useState(false);

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
						<NavItem>Home</NavItem>
					</Link>
					<Link to='/about'>
						<NavItem>About</NavItem>
					</Link>
					<Link to='/business'>
						<NavItem>Business</NavItem>
					</Link>
					<Link to='/review'>
						<NavItem>Review</NavItem>
					</Link>
					<Link to='/account'>
						<NavItem>Account</NavItem>
					</Link>
					<Link to='/contact'>
						<NavItem>Contact Us</NavItem>
					</Link>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
