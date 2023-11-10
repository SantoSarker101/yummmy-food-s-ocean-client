import React from 'react';
import { Button, Col, Container, Figure, FloatingLabel, Form, Row } from 'react-bootstrap';
import Lottie from 'lottie-react';
import cookingQuestion from '../../../assets/question.json'


const CookingQuestion = () => {
	return (
		<Container>

			<h1 className='text-center mb-4 text-success fw-bold'>Cooking Question? </h1>

			<Figure className='d-md-flex flex-sm-column flex-lg-row-reverse justify-content-center align-items-center mx-auto'>

					<Lottie className='w-50' animationData={cookingQuestion} loop={true} />

				<div className='w-50 lh-lg fs-5 text-success fw-bold mx-auto'>

					<Container>


					<Row class="row g-3 text-center mx-auto">

					<FloatingLabel htmlFor="text area">Your Question</FloatingLabel>

						<Form.Control
							as="textarea"
							placeholder="Your Question"
							id='text area'
							style={{ height: '100px', width: '25rem' }}
						/>


						<Col className="col-md-6 mt-4">
							<label htmlFor="name" className="form-label">Name</label>
							<input type="name" name='name' className="form-control" id="name" placeholder='Your Name'/>
						</Col>

						<Col className="col-md-6 mt-4">
							<label htmlFor="email" className="form-label">Email</label>
							<input type="email" name='email' className="form-control" id="email" placeholder='Your Email'/>
						</Col>

						</Row>

						<Button className='mt-5' variant="success">Submit</Button>

					</Container>

					</div>

				</Figure>



			</Container>
	);
};

export default CookingQuestion;