import React from 'react';
import Lottie from "lottie-react";
import chefCookingAnimation from '../../../assets/chefs cooking animation.json'
import { Card, Container, Figure } from 'react-bootstrap';

const KnowUs = () => {
	return (
		<div>
			<Container>

				<h1 className='text-center mb-4 text-success fw-bold'>Get To Know Us</h1>

				<Figure className='d-md-flex flex-sm-column flex-lg-row justify-content-center mx-sm-auto'>

					<Lottie animationData={chefCookingAnimation} loop={true} />

					<p className='w-50 d-flex justify-content-center align-items-center lh-lg fs-5 mx-sm-auto text-success fw-bold'>
						Yummy Food Ocean
						Started as an online cookbook where professional Chefs share their favorite recipes, Yummy Food Ocean has become a valuable resource for professional chef recipes, professional cooking advice, and news from the culinary industry. Yummy Food Ocean was started by American-based Chef Paul Hegeman. In addition to recipes, our featured Chefs also share culinary techniques, advice on cooking materials, and lots of tips for home cooks.

					</p>

				</Figure>



			</Container>
		</div>
	);
};

export default KnowUs;