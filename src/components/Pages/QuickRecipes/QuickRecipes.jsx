import React from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import cook from '../../../assets/cook.jpg'

const QuickRecipes = () => {
	return (
		<div>
			<Card className="bg-dark text-white">

				<Card.Img className='opacity-25' src={cook} alt="Card image" />

				<Card.ImgOverlay className='text-light fw-bolder d-md-flex justify-content-center align-items-center flex-sm-column'>

					<Card.Title className='fs-1 fw-bold'>22 Quick and Easy Recipes in 30 Minutes (or less)</Card.Title>

					<Card.Text className='my-md-3 my-sm-1 fs-5'>
						Plus 5 Chef Secrets To Make You A Better Cook!
					</Card.Text>



					<Form>
						<Row className="mb-3 mt-3">

							<Form.Group as={Col} controlId="formGridName">
								<Form.Control type="text" placeholder="Your Name" />
							</Form.Group>

							<Form.Group as={Col} controlId="formGridEmail">

								<Form.Control type="email" placeholder="Email Address" />
							</Form.Group>

							<Form.Group as={Col} controlId="">
								<Button className='fw-bold' variant="outline-light">Subscribe</Button>
							</Form.Group>

						</Row>
					</Form>


				</Card.ImgOverlay>

			</Card>
		</div>
	);
};

export default QuickRecipes;