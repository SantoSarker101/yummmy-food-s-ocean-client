import React from 'react';
import { Button, Card, CardGroup, Col, Container, Row } from 'react-bootstrap';

const ChefRecipeCards = ({chefRecipesData}) => {

	const {photo,name,yearsOfExperience,recipesItems,likes} = chefRecipesData
	return (
		<div>

		<Card style={{}}>
			<Card.Img variant="top" src={photo} />

			<Card.Body className='bg-secondary bg-opacity-25'>

				<Card.Title className='text-success fw-bold' >{name}</Card.Title>

				<Card.Text>
					<p>Years of Experience: <span className='text-success fw-bold'>
					{yearsOfExperience} Years
					</span></p>


					<p>Numbers of Recipes: <span className='text-success fw-bold'>
					{recipesItems} Items
					</span></p>



					<p><span className='text-info fw-bold'>{likes}</span></p>
				</Card.Text>

				<Button className='fw-bold' variant="success">View Recipes</Button>

			</Card.Body>

		</Card>

		</div>
	);
};

export default ChefRecipeCards;