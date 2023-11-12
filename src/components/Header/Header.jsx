import React, { useContext } from 'react';
import moment from 'moment';
import { Button, Container, Figure, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';

const Header = () => {

	const {user,logOut} = useContext(AuthContext)


	const handleSignOut = () =>{
		logOut()
		.then(result => {})
		.catch(error => console.error(error));
	}


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
					<div className='text-danger py-2'>
						<NavLink to='/' className={({isActive}) => (isActive ? 'text-success fw-bolder' : 'text-decoration-none text-dark fw-bold')}>
						Home
					</NavLink>
					</div>

					<div className='mx-lg-4 py-2'>
						<NavLink to='/blog' className={({isActive}) => (isActive ? 'text-success fw-bolder' : 'text-decoration-none text-dark fw-bold')}>
						Blog
					</NavLink>
					</div>

					<div className='py-2'>
						<NavLink to='/about' className={({isActive}) => (isActive ? 'text-success fw-bolder' : 'text-decoration-none text-dark fw-bold')}>
						About Us
					</NavLink>
					</div>


				</Nav>

				<Nav className='d-lg-flex align-items-center'>


				<div>
					{/* <Link to='/login'>

						<Button variant="dark">Login</Button>

					</Link> */}
				</div>

				<div className=''>

				</div>



				<div className='mx-lg-3 fs-1'>

					{/* <FaUserCircle>

					</FaUserCircle> */}

				</div>

				{user ? <span className='py-2'>

					<span className='fw-bold me-3'>{user.displayName}</span>

					<Figure.Image
					width={35}
					height={40}
					alt="171x180"
					className='rounded-circle mx-4'
					src={user.photoURL}
				/>

				<Button onClick={handleSignOut} variant="dark" className='ms-3'>Log out</Button>

					</span>  :


				<div className='py-3'>
					<Link to='/login'>

						<Button
						className='fw-bold'
						variant="dark">Login</Button>

					</Link>


					<Link to='/register'>

						<Button variant="dark" className='ms-4 fw-bold'>Register</Button>

					</Link>
				</div>

					}


				{/* <div className='mx-lg-3'>



				</div> */}


				</Nav>

				</Navbar.Collapse>

			</Container>
			</Navbar>
		</div>
	);
};

export default Header;