//Import react dependencies
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import GlobalStyle from './GlobalStyle'

//Import react components
import About from './components/About';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import Home from './components/Home'
import Contact from './components/Contact'
import BusinessPage from './components/BusinessPage'
import Review from './components/Review'
import SignIn from "./components/SignIn"

//Import react Styled Components
import { IconContext } from 'react-icons/lib';
import Nav from './components/NavbarStyle';
import NavMenu from './components/NavbarStyle'



const App = () => {
	
	
	return (
		<>
			<GlobalStyle />
			<IconContext.Provider value={{ color: 'black' }}>
				<Link to='/' />

				<body>
					<Navbar />

					<Switch>
						<Route path='/home' exact redirect={Home} />
						<Route path='/about' exact component={About} />
						<Route path='/business' exact component={BusinessPage} />
						<Route path='/review' exact component={Review} />
						<Route path='/signin' exact component={SignIn} />
						<Route path='/contact' exact component={Contact} />
					</Switch>
					<Footer/>
				</body>
			</IconContext.Provider>
		</>
	);
};

export default App;
