import React from 'react';
import moment from 'moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
	return (
		<div>
			<div className="text-center">
				<h2 className='fw-bolder text-success'>Yummmy Food's Ocean</h2>
				<p className='text-success fw-bold'><small>We Provide American Chef Recipe</small></p>
				<p className='text-secondary fw-bold'>{moment().format("dddd, D MMMM, YYYY")}</p>
			</div>




			<Navbar collapseOnSelect expand="lg"  className="bg-body-secondary">
			<Container>
				<Navbar.Brand>
					<Link to='/' className='text-decoration-none text-success fw-bolder'>Yummmy Food's Ocean</Link>
				</Navbar.Brand>

				<Navbar.Toggle aria-controls="responsive-navbar-nav" />

				<Navbar.Collapse id="responsive-navbar-nav">

				<Nav className="mx-auto text-dark">
					<div className='text-danger'>
						<NavLink to='/' className={({isActive}) => (isActive ? 'text-success fw-bolder' : 'text-decoration-none text-dark')}>
						Home
					</NavLink>
					</div>

					<div className='mx-lg-4'>
						<NavLink to='/blog' className={({isActive}) => (isActive ? 'text-success fw-bolder' : 'text-decoration-none text-dark')}>
						Blog
					</NavLink>
					</div>

					<div>
						<NavLink to='/about-us' className={({isActive}) => (isActive ? 'text-success fw-bolder' : 'text-decoration-none text-dark')}>
						About Us
					</NavLink>
					</div>


				</Nav>

				<Nav className='d-lg-flex align-items-center'>


				<div>
					<NavLink to='/login' className={({isActive}) => (isActive ? 'text-success' : 'text-decoration-none text-dark')}>
						<Button variant="dark">Login</Button>
					</NavLink>
				</div>

				<div className='mx-lg-3'>
					<NavLink to='/register' className={({isActive}) => (isActive ? 'text-success' : 'text-decoration-none text-dark')}>
						<Button variant="dark">Register</Button>
					</NavLink>
				</div>


				<div className='mx-lg-3'>
					<NavLink to='/logout' className={({isActive}) => (isActive ? 'text-success' : 'text-decoration-none text-dark')}>
						<Button variant="dark">Log out</Button>
					</NavLink>
				</div>


				<div className='mx-lg-3 fs-1'>
					<NavLink className={({isActive}) => (isActive ? 'text-success' : 'text-dark')}>
					<FaUserCircle></FaUserCircle>
					</NavLink>
				</div>


				</Nav>

				</Navbar.Collapse>

			</Container>
			</Navbar>
		</div>
	);
};

export default Header;