import React, { useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { ToastContainer, toast } from 'react-toastify';

const MyRecipesData = ({myRecipes}) => {
	const [dis,setDis] = useState(true);
	const {name,img,ingredients,cookingMethod,rating} = myRecipes;

	const addFavorite = () => {
		toast("Add To Favorite")
	}
	return (
		<div>
			<div>

			<Container>

				<Card className="mb-5 mt-5">

				<div className="row g-0">
					<div className="col-md-4">

					<Card.Img src={img} className="img-fluid rounded-start" alt="" />

					</div>

					<div className="col-md-8">

					<Card.Body className="ms-lg-5">

						<Card.Title className='text-success fw-bold fs-1'>{name}</Card.Title>

						<div>

							<>

								<p className='fw-bold'>Ingredients: </p>

								{
									ingredients.map((ingredient,index) => <p className='text-success' key={index}>
										# {ingredient}
									</p>)
								}

							</>

							<p className='fw-bold'>Cooking Method: <span className='text-success fw-bold'>
								{cookingMethod} Items
							</span></p>

							<p className='d-flex align-items-center'>
								<Rating style={{ maxWidth: 150 }} value={rating} readOnly />

								<span className='text-success fw-bold ms-2'>
									{rating}
								</span>

							</p>

							<div className='d-flex justify-content-end'>
								<Button onClick={() => setDis(addFavorite)} className={!dis &&'disabled'} variant="success">Favorite</Button>
							</div>

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