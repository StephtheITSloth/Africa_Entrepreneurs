import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import APIurl from '../config';
import { IconContext } from 'react-icons/lib';

const PostBusiness = () => {
	// const initialState = {
	// 	owner: '',
	// 	business: '',
	// 	location: '',
	// 	description: '',
	// 	year: '',
	// };

	// const history = useHistory();
	const [businesses, setBusinesses] = useState(null);

	const handleChange = (event) => {
		setBusinesses({ ...businesses, [event.target.name]: event.target.value });
	};

	// const handleSubmit = (event) => {
	// 	event.preventDefault();
	// 	axios({
	// 		url: `${APIurl}/businesses`,
	// 		method: 'GET',
	// 		headers: {
	// 			Authorization: `Bearer ${localStorage.getItem('token')}`,
	// 		},
	// 		data: business,
	// 	})
	// 		.then(() => {
	// 			history.push('/');
	// 		})
	// 		.catch(console.error);
	// };

	useEffect(() => {
		fetch('https://pacific-dusk-53111.herokuapp.com/businesses/')
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				setBusinesses(res);
			})
			.catch((err) => console.log(err));
	}, []);
	if (businesses == null) {
		return null;
	}
	return (
		<div>
			<h1>List Of Businesses</h1>
			<section>
				{businesses.map((business) => {
					return (
						<div>
							<ul>
								<li>{business.business_name}</li>
								<li>{business.business_year_in_operation}</li>

								<li>{business.business_location}</li>
							</ul>
						</div>
					);
				})}
			</section>
		</div>
	);
};

export default PostBusiness;
