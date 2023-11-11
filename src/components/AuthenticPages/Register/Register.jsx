import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
	return (
		<div className='bg-dark text-light'>

		<Container className='pt-5 pb-5'>

		<h2 className='mt-3 mb-5 text-center' >Sign Up to Yummmy Foods Ocean</h2>

		<Row>
			<Col xs={12} md={8} lg={5} className='mx-auto p-5' style={{boxShadow: '0 4px 8px rgba(255, 255, 255, 0.2'}}>

				<Form>


				<Form.Group className="mb-4" controlId="formBasicEmail">
					<Form.Label>Your Name</Form.Label>

					<Form.Control className='text-center' type="name"
					name='name'
					placeholder="Your Name" required />

				</Form.Group>


				<Form.Group className="mb-1" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>

					<Form.Control
					className='text-center'type="email"
					name='email'
					placeholder="Write Your Email" required />

				</Form.Group>


				<Form.Group className="mb-4" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
					className='text-center'type="password"
					name="password"
					placeholder="Write Password" required />
				</Form.Group>


				<Form.Group className="mb-4" controlId="formBasicPassword">
					<Form.Label>Photo URL</Form.Label>
					<Form.Control
					className='text-center'type="photo"
					name="photo"
					placeholder="Photo URL" />
				</Form.Group>


				<Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="Check me out" />
				</Form.Group>

				<Button variant="outline-light" type='submit'>Submit</Button>
				<br /><br />


				<Form.Text className="text-warning fw-bold">
					Already Have an Account ? <Link to='/login' className='text-info'>Login</Link>
				</Form.Text>



				<Form.Text className="text-warning fw-bold">

				</Form.Text>


				<Form.Text className="text-info fw-bold">

				</Form.Text>


			</Form>

			</Col>
		</Row>


		</Container>


		</div>
	);
};

export default Register;