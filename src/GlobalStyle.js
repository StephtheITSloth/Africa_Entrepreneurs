import styled, { createGlobalStyle } from 'styled-components';
// import img from './components/images/elephanthome.jpg';

const GlobalStyle = createGlobalStyle`
*{	box-sizing: border-box;
	margin: 0;
	padding: 0;
	color:white;
	width: 100%;
	
	
}

body {
	 background-image: url('https://i.imgur.com/8Q41eiB.jpg');
	 background-repeat: no-repeat;
	 background-position: center;
		text-align: center;
		height: 100%;
		width: 100%;

	}

button {
	height: 30px;
	width: 40px;
	margin-left: 5px;
	margin-top: 40px;
	color: black;
	padding: 2px;
	border: none;
	background: #d2a679;
	opacity: 0.8;
	border-radius: 25px;
}

button:hover {
	background: black;
	color: white;
}

nav{
	 font-size: 45px;
	 position: sticky;
}

ul{
	font-size: 20px;
	text-align: center;
	list-style-type: none;
	align-items: center;
	
}

li{
	font-size: 10px;
	padding: 5px;
	display: inline;
	cursor: pointer;
}

footer{
	width: 100%;
	height: 10%;
	padding: 10px;
	font-size: 15px;
	background-color: black;
	opacity: 0.7;

}
a{
	padding-bottom: 5px;
}

/* div {
	display: inline;

} */



`;

export default GlobalStyle;
