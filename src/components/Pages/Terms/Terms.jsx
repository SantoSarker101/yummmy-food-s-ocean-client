import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
	return (
		<Container>
			<h2 className='text-center text-success fw-bold mt-5 mb-4'>Terms and Conditions</h2>


			<p className='text-success'>
			1. <span className="text-success fw-bold text-decoration-underline">Acceptance of Terms: </span> <br />

				By creating an account on this website, you agree to comply with and be bound by the following terms and conditions of use. If you do not agree to these terms, please do not use this website. <br /> <br />

				2. <span className="text-success fw-bold text-decoration-underline">User Responsibilities: </span> <br />

				2.1. You are responsible for providing accurate and complete information during the registration process. <br />

				2.2. You are responsible for maintaining the confidentiality of your account information, including your username and password. <br /> <br />

				3. <span className="text-success fw-bold text-decoration-underline">User Conduct: </span> <br />

				3.1. You agree to use the website in accordance with all applicable laws and regulations. <br />

				3.2. You agree not to engage in any conduct that may disrupt or interfere with the functioning of the website. <br /> <br />

				4. <span className="text-success fw-bold text-decoration-underline">Privacy Policy: </span> <br />

				4.1. The collection and use of your personal information are governed by our Privacy Policy. Please review the Privacy Policy to understand how your data is handled. <br /> <br />

				5. <span className="text-success fw-bold text-decoration-underline">Intellectual Property: </span> <br />

				5.1. All content on this website, including text, graphics, logos, and images, is the property of [Your Company Name] and is protected by intellectual property laws. <br /> <br />

				6. <span className="text-success fw-bold text-decoration-underline">Termination of Account: </span>

				6.1. We reserve the right to terminate or suspend your account at our discretion, without notice, for any violation of these terms and conditions. <br /> <br />

				7. <span className="text-success fw-bold text-decoration-underline">Limitation of Liability</span> <br />

				7.1. [Your Company Name] is not liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your use or inability to use the website. <br /> <br />

				8. <span className="text-success fw-bold text-decoration-underline">Changes to Terms</span> <br />

				8.1. [Your Company Name] reserves the right to modify these terms and conditions at any time. Changes will be effective immediately upon posting on the website. <br /> <br />

				9. <span className="text-success fw-bold text-decoration-underline">Governing Law </span> <br />

				9.1. These terms and conditions are governed by the laws of [Your Jurisdiction], and you agree to submit to the exclusive jurisdiction of the courts in [Your Jurisdiction]. <br /> <br />

				10. <span className="text-success fw-bold text-decoration-underline">Governing Law </span> <br />

				10.1. For questions or concerns regarding these terms and conditions, please contact us at [Your Contact Information].


			</p>

			<div className='d-flex justify-content-center fw-bold mt-5 mb-5'>
				<Link to='/register'>
					<Button variant="success">Go Back to Register </Button>
				</Link>
			</div>


		</Container>
	);
};

export default Terms;