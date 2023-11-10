import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className='bg-dark
		border-top
		border-light'>
			{/* <hr className='border-top-0 border-bottom-0' /> */}
			<Container>

				<Card className='border-0 bg-dark'>

					<Card.Body>

						{/* <blockquote className="blockquote mb-0"> */}

						<p className='text-light text-center mb-5 mt-4'>
							{/* {' '} */}
							<Link className='me-4 lh-lg text-light'>Site Map</Link>
							<Link className='me-4 lh-lg text-light'>Visitor Agreement</Link>
							<Link className='me-4 lh-lg text-light'>AdChoices </Link>
							<Link className='me-4 lh-lg text-light'>Privacy Notice</Link>
							<Link className='me-4 lh-lg text-light'>About</Link>
							<Link className='me-4 lh-lg text-light'>Newsroom</Link>
							<Link className='me-4 lh-lg text-light'>Advertise</Link>
							<Link className='me-4 lh-lg text-light'>Help</Link>
							<Link className='me-4 lh-lg text-light'>Recipes Ratings</Link>
							<Link className='me-4 lh-lg text-light'>Online Closed Captioning</Link>
							<Link className='me-4 lh-lg text-light'>American Privacy Notice</Link>
							<Link className='me-4 lh-lg text-light'>Accessibilit</Link>
							<Link className='me-4 lh-lg text-light'>Newsletters</Link>
							<Link className='me-4 lh-lg text-light'>Yummmy Foods Ocean, Inc.</Link> <br />
							<Link className='text-light text-decoration-none lh-lg'>Do Not Sell or Share my Personal Information</Link>
							{/* {' '} */}
						</p>

						<div className="blockquote-footer mb-4">
							{/* Someone famous in <cite title="Source Title">Source Title</cite> */}
							<Link className='me-5 text-info'>International Editions</Link>
							<Link className='me-5 text-info lh-lg'>Yummmy Foods Ocean Family of Networks</Link>
							<span className='me-5 text-info'> &copy; 2023 Santo Sarker. Yummmy Foods Ocean, Inc. or its subsidiaries and affiliates. All rights reserved. </span>
						</div>


						{/* </blockquote> */}

					</Card.Body>

				</Card>
				</Container>
		</footer>
	);
};

export default Footer;