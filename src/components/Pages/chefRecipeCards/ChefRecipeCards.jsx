import React from 'react';
import { Button, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';

const ChefRecipeCards = ({chefRecipesData}) => {

	const {id,photo,name,yearsOfExperience,recipesItems,likes} = chefRecipesData
	return (
		<div>

		<Card style={{}}>
			<Card.Img variant="top" src={photo} />

			<Card.Body className='bg-secondary bg-opacity-25'>

				<Card.Title className='text-success fw-bold' >{name}</Card.Title>

				<>
					<p>Years of Experience: <span className='text-success fw-bold'>
					{yearsOfExperience} Years
					</span></p>


					<p>Numbers of Recipes: <span className='text-success fw-bold'>
					{recipesItems} Items
					</span></p>



					<p>
						<FaHeart className='text-success me-1'></FaHeart>

						<span className='text-info fw-bold'>{likes}</span></p>
				</>

				<Link to={`/viewRecipes/${id}`}>
					<Button className='fw-bold' variant="success">View Recipes</Button>
				</Link>

			</Card.Body>

		</Card>

		</div>
	);
};

export default ChefRecipeCards;