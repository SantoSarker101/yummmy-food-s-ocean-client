import React from 'react';
import { Card, Container } from 'react-bootstrap';

const MyRecipesData = ({myRecipes}) => {
	const {name,img,ingredients,cookingMethod,rating} = myRecipes;
	return (
		<div>
			<div>

			<Container>

				<Card className="mb-3 mt-5">

				<div className="row g-0">
					<div className="col-md-4">

					<Card.Img src={img} className="img-fluid rounded-start" alt="" />

					</div>

					<div className="col-md-8">

					<Card.Body className="ms-lg-5">

						<Card.Title className='text-success fw-bold fs-1'>{name}</Card.Title>

						<div>

							<div>

								<p className='fw-bold'>Ingredients: </p>

								{
									ingredients.map(ingredient => <p className='text-success'>
										# {ingredient}
									</p>)
								}

							</div>

							<p className='fw-bold'>Cooking Method: <span className='text-success fw-bold'>
								{cookingMethod} Items
							</span></p>

							<p>Years of Experience: <span className='text-success fw-bold'>
								{} Years
							</span></p>

						</div>


					</Card.Body>

					</div>

				</div>

				</Card>

			</Container>

			</div>
		</div>
	);
};

export default MyRecipesData;