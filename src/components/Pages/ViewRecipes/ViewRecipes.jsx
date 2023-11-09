import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import MyRecipesData from '../MyRecipesData/MyRecipesData';

const ViewRecipes = () => {
	const viewRecipesData = useLoaderData()
	console.log(viewRecipesData);

	const {photo,name,yearsOfExperience,recipesItems,likes,description,numbersOfRecipes} = viewRecipesData;
	return (
		<div>

			<div>

				<Card className="mb-5 mt-5">

				<div className="row g-0">
					<div className="col-md-4">

					<Card.Img src={photo} className="img-fluid rounded-start" alt="" />

					</div>

					<div className="col-md-8">

					<Card.Body className="ms-lg-5">

						<Card.Title className='text-success fw-bold fs-1'>{name}</Card.Title>

						<div>
							<p className='text-success fw-bold'>{description}</p>

							<p>
								<FaHeart className='text-primary me-1'></FaHeart>
								<span className='text-info fw-bold'>{likes}</span></p>

							<p>Numbers of Recipes: <span className='text-success fw-bold'>
								{recipesItems} Items
							</span></p>

							<p>Years of Experience: <span className='text-success fw-bold'>
								{yearsOfExperience} Years
							</span></p>

						</div>


					</Card.Body>

					</div>

				</div>

				</Card>

			</div>




			<div className='mt-5'>

				<h2 className='text-center mt-5 text-success fw-bold text-decoration-underline'>My Recipes Information</h2>


				<div>
				{
					numbersOfRecipes.map(myRecipes => <MyRecipesData key={MyRecipesData.name} myRecipes={myRecipes}></MyRecipesData>)
				}
				</div>
			</div>

		</div>
	);
};

export default ViewRecipes;