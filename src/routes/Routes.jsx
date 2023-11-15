import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/Home/Home";
import Blog from "../components/Pages/Blog/Blog";
import ViewRecipes from "../components/Pages/ViewRecipes/ViewRecipes";
import LoadingSpinner from "../components/Pages/LoadingSpinner/LoadingSpinner";
import ErrorPage from "../components/Pages/ErrorPage/ErrorPage";
import About from "../components/Pages/About/About";
import Register from "../components/AuthenticPages/Register/Register";
import Login from "../components/AuthenticPages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Terms from "../components/Pages/Terms/Terms";

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout></MainLayout>,
		errorElement: <ErrorPage></ErrorPage>,
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
				path: '/about',
				element: <About></About>
			},
			{
				path: '/register',
				element: <Register></Register>
			},
			{
				path: '/terms',
				element: <Terms></Terms>
			},
			{
				path: 'login',
				element: <Login></Login>
			},
			{
				path: '/viewRecipes/:id',
				element: <PrivateRoute><ViewRecipes></ViewRecipes></PrivateRoute>,
				loader: ({params}) => fetch(`https://zany-erin-lovebird-hem.cyclic.app/chef-recipes-unic-data/${params.id}`)
			},
			{
				path: '/loadingSpinner',
				element: <LoadingSpinner></LoadingSpinner>
			},
		]
	},
])


export default router;