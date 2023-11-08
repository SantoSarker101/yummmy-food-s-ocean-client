import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewRecipes = () => {
	const viewRecipesData = useLoaderData()
	console.log(viewRecipesData);
	return (
		<div>
			<h1>View All Recipes</h1>
		</div>
	);
};

export default ViewRecipes;