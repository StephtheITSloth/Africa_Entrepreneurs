import styled from 'styled-components';
import img from './images/thankyou.jpg';

export const Modal = styled.form`
    display: none;
	width: 25%;
	height: 25%;
	border: 2px solid black;
	border-radius: 2px;
	background: white;
	color: white;
`;

export const ThankYou = styled.img`
    display: none;  
	width: 25%;
	height: 25%;
	background-image: url(${img});
	position: fixed;
	border: 2px solid black;
	border-radius: 2px;
`;
