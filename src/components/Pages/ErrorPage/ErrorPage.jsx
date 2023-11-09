import React from 'react';
import { Button } from 'react-bootstrap';
import { FaSadCry } from 'react-icons/fa';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
	const {error,status} = useRouteError()
	console.log(error.message);
	return (
		<div className='d-flex flex-column justify-content-center align-items-center'>

			<div className='text-warning' style={{fontSize: '8rem'}}>
				<FaSadCry></FaSadCry>
			</div>
			<h1 style={{fontSize: '8rem'}} className='text-danger'>{status}</h1>
			<h3 className='text-danger'>{error.message}</h3>
			<Link to='/'>
				<Button className='mt-4 fw-bold' variant="success">Back To Home</Button>
			</Link>
		</div>
	);
};

export default ErrorPage;