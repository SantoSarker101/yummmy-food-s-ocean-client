import React, { useContext, useRef, useState } from 'react';
import { Button, Col, Container, Figure, Form, Row } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import yummy from '../../../../public/yummy6.png'
import { AuthContext } from '../../../providers/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
	const [error,setError] = useState('')
	const [show,setShow] = useState(false)
	const location = useLocation()
	console.log(location);
	const from = location?.state?.from?.pathname || '/';

	const {SignInPop,signIn,passwordReset} = useContext(AuthContext)
	const emailRef = useRef();

	const navigate = useNavigate();

	const provider = new GoogleAuthProvider();

	const handleGoogleSignIn = () =>{
		SignInPop(provider)
		.then(result => {
			const user = result.user;
			console.log(user);
			navigate(from, {replace: true})
		})
		.catch(error => {
			console.log(error);
		})
	}



	const handleSignIn = (event) => {
		event.preventDefault();

		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;
		console.log(email,password);

		signIn(email, password)
		.then(result => {
			const loggedUser = result.user;
			console.log(loggedUser);
			navigate(from, {replace: true})
			form.reset()
		})
		.catch(error => {
			console.log(error);
		})

	}



	const handleResetPassword = () =>{
		const email = (emailRef.current.value);

		passwordReset(email)
		.then(() => {
			toast("Please Check Your Email")
		})
		.catch(error => {
			console.log(error);
			setError(error.message)
		})
	}

	return (
		<div className='bg-dark text-light'>

		<Container className='pt-5 pb-5'>


		<Row>
			<Col xs={12} md={8} lg={5} className='mx-auto p-5' style={{boxShadow: '0 4px 8px rgba(255, 255, 255, 0.2'}}>


				<Figure className='d-flex justify-content-center'>
						<Figure.Image
							// width={70}
							// height={50}
							// alt="70x50"
							src={yummy}
						/>
				</Figure>


				<h2 className='mt-3 mb-5 text-center' >Sign in to Yummmy Foods Ocean</h2>



			<Form onSubmit={handleSignIn}>
				<Form.Group className="mb-3" controlId="formBasicEmail">

					<Form.Label>Email address</Form.Label>

					<Form.Control type="email" name='email'
					ref={emailRef}
					placeholder="Enter email" required />

					<Form.Text className="text-secondary">
					We will never share your email with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">

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


				<Button variant="outline-light mt-3" type='submit'>Login</Button>


				<p className='text-center mt-4'><small className='me-2'>Forget Password? Please</small>  <Button onClick={handleResetPassword} variant="outline-info" className="fw-bold">Reset Password</Button> </p>


				<Form.Group className="mt-5 mb-3 d-flex justify-content-center">

				<Button onClick={handleGoogleSignIn} variant="info" className='fw-bold d-flex align-items-center justify-content-center'>

				<span>Sign-in With Google</span>

				<span className='fs-4 ms-3'><FaGoogle></FaGoogle></span>

				</Button>

				</Form.Group>


				<Form.Group className="mb-3 mt-4 d-flex justify-content-center">

      			<Button variant="info" className='fw-bold d-flex align-items-center justify-content-center'>

					<span>Sign-in With GitHub</span>

					<span className='fs-4 ms-3'><FaGithub></FaGithub></span>

				</Button>

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