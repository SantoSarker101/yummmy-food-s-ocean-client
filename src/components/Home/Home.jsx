import React, { useEffect, useState } from 'react';
import bgImageChef from '../../assets/cooking-chef-cartoon.png'
import { Button, Card, Container, Row } from 'react-bootstrap';
import { Link, useNavigation } from 'react-router-dom';
import ChefRecipeCards from '../Pages/chefRecipeCards/ChefRecipeCards';
import LoadingSpinner from '../Pages/LoadingSpinner/LoadingSpinner';
import QuickRecipes from '../Pages/QuickRecipes/QuickRecipes';
import KnowUs from '../Pages/KnowUs/KnowUs';

const Home = () => {
	const [recipesData,setRecipesData] = useState([]);

	useEffect(() => {
		fetch('http://localhost:5000/chef-recipes-all-data')
		.then(res => res.json())
		.then(data => setRecipesData(data))
		.catch(error => console.error(error))
	},[])

	const navigation = useNavigation()
	console.log(navigation.state);

	if(navigation.state === 'loading'){
		return <LoadingSpinner></LoadingSpinner>
	}

	return (
		<>
			<div>
				<Card className="bg-dark text-white">

					<Card.Img className='opacity-50' src={bgImageChef} alt="Card image" />

					<Card.ImgOverlay className='text-light fw-bolder d-md-flex justify-content-center align-items-center flex-sm-column'>
						<Card.Title className='fs-1 fw-bold'>Get Ready for <br /> Gifting & Gathering</Card.Title>

						<Card.Text className='my-md-5 my-sm-1 fs-md-5'>
						The holidays are almost here! <br /> Stock up on gifts for everyone at prices <br /> that will make the season bright.
						</Card.Text>

						<Link to='/about'>

						<Button variant="success fw-bold">Learn About Us</Button>

						</Link>
					</Card.ImgOverlay>

				</Card>
			</div>



			<div className='mt-5'>
				<h1 className='mb-3 text-center text-success fw-bold'>Meet Our Chefs</h1>

				<div>
				<Container>
      				<Row  sm={1} md={2} className='g-5'>
					  {
						recipesData.map(chefRecipesData => <ChefRecipeCards key={chefRecipesData.id} chefRecipesData = {chefRecipesData}></ChefRecipeCards>)
					}
      				</Row>
    			</Container>
				</div>
			</div>



			<div className='mt-5'>
				<QuickRecipes></QuickRecipes>
			</div>



			<div className='mt-5'>
				<KnowUs></KnowUs>
			</div>


		</>
	);
};

export default Home;