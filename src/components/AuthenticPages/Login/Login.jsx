import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<div className='bg-dark text-light'>

		<Container className='pt-5 pb-5'>

		<h2 className='mt-3 mb-5 text-center' >Sign in to Yummmy Foods Ocean</h2>

		<Row>
			<Col xs={12} md={8} lg={5} className='mx-auto p-5' style={{boxShadow: '0 4px 8px rgba(255, 255, 255, 0.2'}}>

				<Form>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" required />
					<Form.Text className="text-secondary">
					We will never share your email with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password" required />
				</Form.Group>


				<Button variant="outline-light mt-3" type='submit'>Login</Button>


				<Form.Group className="mt-5 mb-3 text-center">
				<Button variant="info" className='fw-bold'>Sign-in With Google</Button>
				</Form.Group>

				<Form.Group className="mb-3 mt-4 text-center">
      			<Button variant="info" className='fw-bold'>Sign-in With GitHub</Button>
				</Form.Group>


				<br /><br />


				<Form.Text className="text-warning fw-bold text-center">
					<div>
					Don't Have an Account ? <Link to='/register' className='text-info'>Register</Link>
					</div>
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

export default Login;