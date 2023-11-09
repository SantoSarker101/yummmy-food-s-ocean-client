import React from 'react';
import Lottie from "lottie-react";
import chefCookingAnimation from '../../../assets/chefs cooking animation.json'

const KnowUs = () => {
	return (
		<div>
			<div>
				<Lottie animationData={chefCookingAnimation} loop={true} />;
			</div>
		</div>
	);
};

export default KnowUs;