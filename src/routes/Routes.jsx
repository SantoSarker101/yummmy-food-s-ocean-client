import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/Home/Home";
import Blog from "../components/Pages/Blog/Blog";
import ViewRecipes from "../components/Pages/ViewRecipes/ViewRecipes";

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout></MainLayout>,
		children: [
			{
				path: '/',
				element: <Home></Home>
			},
			{
				path: '/blog',
				element: <Blog></Blog>
			},
			{
				path: '/viewRecipes/:id',
				element: <ViewRecipes></ViewRecipes>,
				loader: ({params}) => fetch(`http://localhost:5000/chef-recipes-unic-data/${params.id}`)
			},
		]
	},
])


export default router;