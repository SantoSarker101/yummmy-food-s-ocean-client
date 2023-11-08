import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const ViewRecipes = () => {
	const viewRecipesData = useLoaderData()
	console.log(viewRecipesData);

	const {id,photo,name,yearsOfExperience,recipesItems,likes,description} = viewRecipesData;
	return (
		<div>

			<div>

				<Card className="mb-3 mt-5">

				<div className="row g-0">
					<div className="col-md-4">

					<Card.Img src={photo} className="img-fluid rounded-start" alt="" />

					</div>

					<div className="col-md-8">

					<Card.Body className="">

						<Card.Title className='text-success fw-bold fs-1'>{name}</Card.Title>

						<div>
							<p className='text-success fw-bold'>{description}</p>

							<p><span className='text-info fw-bold'>{likes}</span></p>

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
		</div>
	);
};

export default ViewRecipes;