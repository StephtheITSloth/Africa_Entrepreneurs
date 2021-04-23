import React from 'react';
import {Link} from 'react-router-dom'
import FooterStyle from './FooterStyle'
import {AiFillGithub} from 'react-icons/ai'
import {GoMail} from 'react-icons/go'

const Footer = () => {
	return (
		<footer>
			
						Developer:
					<ul>
						
							<li>
								<a href="mailto:stephan.karim.sk@gmail.com"><GoMail/>
								</a>
							</li>
							<li>
								<a href='https://github.com/'><AiFillGithub/></a>
							</li>
							
					</ul>
		</footer>
	);
};

export default Footer;
