import React from 'react';
import { Container, Spinner } from 'react-bootstrap';

const LoadingSpinner = () => {
	return (

			<Container className='d-flex justify-content-center align-items-center my-5' style={{fontSize: '10rem'}}>
			<p>L</p>
			<div>
				<Spinner animation="border" variant="info" />
			</div>
			<p>ading</p>
			</Container>

	);
};

export default LoadingSpinner;