import React, { useContext, useState } from 'react';
import { Button, Col, Container, Figure, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import yummy from '../../../../public/yummy6.png'
import { AuthContext } from '../../../providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import { updateProfile } from 'firebase/auth';

const Register = () => {
	const [error,setError] = useState('');
	const {createUser} = useContext(AuthContext)
	const [show,setShow] = useState(false)

	const handleSignUp = event => {
		event.preventDefault();

		const form = event.target;
		const name = form.name.value
		const email = form.email.value;
		const password = form.password.value;
		const photo = form.photo.value

		console.log(name,email,password,photo);


		setError('');

		if(password.length < 6){
			setError('Password Must Be 6 Characters of Longer');
		}

		createUser(email,password)
		.then(result => {
			const loggedUser = result.user
			console.log(loggedUser);
			toast("Created Your Account")

			updateUserData(result.user,name,photo)
			setError('')
			form.reset();
		})
		.catch(error => {
			console.log(error);
			setError(error.message)
		})
	}


	const updateUserData = (user,name,photoURL) => {
		updateProfile(user, {
			displayName: name,
			photoURL : photoURL,
		})
		.then(() =>{
			console.log('User name update')
		})
		.catch(error => {
			setError(error.message);
		})
	}
	return (
		<div className='bg-dark text-light'>

		<Container className='pt-5 pb-5'>



		<Row>
			<Col xs={12} md={8} lg={5} className='mx-auto p-5' style={{boxShadow: '0 4px 8px rgba(255, 255, 255, 0.2'}}>

				<Figure className='d-flex justify-content-center'>
					<Figure.Image
						// width={171}
						// height={180}
						// alt="171x180"
						src={yummy}
					/>
				</Figure>

				<h2 className='mt-3 mb-5 text-center' >Sign Up to Yummmy Foods Ocean</h2>

			<Form onSubmit={handleSignUp}>


				<Form.Group className="mb-4" controlId="formBasicName">

					<Form.Label>Your Name</Form.Label>

					<Form.Control className='text-center' type="text"
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


				<Form.Group className="mb-4 mt-4" controlId="formBasicPassword">

					<Form.Label>Password</Form.Label>

					<Form.Control type={show ? 'text' : 'password'} name='password' placeholder="Password" required />

					<p onClick={() => setShow(!show)}>
						<small>
							{
								show ? <span>Hide Password</span> : <span>Show Password</span>
							}
						</small>
					</p>

				</Form.Group>


				<Form.Group className="mb-4" controlId="formBasicPhoto">

					<Form.Label>Photo URL</Form.Label>
					<Form.Control
					className='text-center'type="text"
					name="photo"
					placeholder="Photo URL" required />
					
				</Form.Group>


				<Form.Group className="mb-4" controlId="formBasicCheckbox">
					<Form.Check type="checkbox"
					name='accept'
					label="Accept Terms and Conditions" />
				</Form.Group>

				<Button className='mb-3' variant="outline-light" type='submit'>Submit</Button>
				<br /><br />


				<Form.Text className="text-warning fw-bold mt-5 mb-4 text-center">
					<div>
						Already Have an Account ? <Link to='/login' className='text-info'>Login</Link>
					</div>
				</Form.Text>



				<Form.Text className="text-danger fw-bold mt-5 text-center">
					{
						error && <p className='mt-4'>Error:  {error}</p>
					}
				</Form.Text>


				<Form.Text className="text-info fw-bold mt-4">

				</Form.Text>


			</Form>

			</Col>
		</Row>


		</Container>


		</div>
	);
};

export default Register;