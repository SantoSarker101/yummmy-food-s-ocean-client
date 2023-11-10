import React from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
	return (
		<div>
			<Header></Header>

			<Outlet></Outlet>

			<Footer></Footer>

			<ToastContainer></ToastContainer>
		</div>
	);
};

export default MainLayout;