import React from 'react';
import { Card, Container } from 'react-bootstrap';

const Blog = () => {
	return (
		<div className='bg-dark'>
			<Container>
			<h1 className='text-info fw-bold text-center pt-5'>Some Questions Answer</h1>

			<Card className='mt-5 text-success fw-bold'>
				<Card.Header as="h5" className='text-success fw-bold text-center fs-3'>differences between uncontrolled and controlled components</Card.Header>

				<Card.Body className=''>
					

					<div>
					<span className='text-info fw-bold text-decoration-underline'>Controlled Components:</span>
					<br />

					Provide more control and synchronization with React's state management. Useful when you need to manipulate or validate the input data before rendering it.

					<br /><br />
					<span className='text-danger fw-bold text-decoration-underline'>State Management:</span>  In controlled components, the state of the form elements (such as input fields, checkboxes, etc.) is managed by the React component itself.
					<br />
					<span className='text-danger fw-bold text-decoration-underline'>Data Flow: </span> The component receives the current state and value as props and notifies changes through callback functions.
					<br />
					<span className='text-danger fw-bold text-decoration-underline'>Example:</span> If you have an input field, you might control it by storing its value in the component's state and updating the state with an onChange handler.
					</div> <br /><br />


					<div>
					<span className='text-info fw-bold text-decoration-underline'>Uncontrolled Components:</span>
					<br />

					Can be simpler to integrate with non-React code or when you want to delegate more responsibility to the DOM. Useful for quick prototyping.
					Ultimately, the choice between controlled and uncontrolled components depends on the specific requirements of your application and your development preferences.

					<br /><br />
					<span className='text-danger fw-bold text-decoration-underline'>State Outside React:</span> In uncontrolled components, the state is not managed by the React component. Instead, the DOM elements hold and manage their own state.
					<br />
					<span className='text-danger fw-bold text-decoration-underline'>Ref Usage:</span> Refs are often used to interact with and get values from the DOM elements directly.
					<br />
					<span className='text-danger fw-bold text-decoration-underline'>Example:</span> In the case of an input field, you might use a ref to get its value without explicitly storing it in the components state.
					</div>


				</Card.Body>

			</Card>




			<Card className='mt-5 text-success fw-bold'>
				<Card.Header as="h5" className='text-success fw-bold text-center  fs-3'>How to validate React props using PropTypes?
				</Card.Header>

				<Card.Body className=''>

					<div>

					<p>In React, you can use PropTypes to specify the types of props that your component should receive. This helps you catch bugs early and communicate the expected types of data for each prop. PropTypes is a separate library that you can use in conjunction with React.Heres an example of how you can use PropTypes to validate React props:</p>


					<span className='text-danger fw-bold text-decoration-underline'>Install the prop-types library:</span>
					If you haven not installed it yet, you can do so using npm or yarn:  <span className='text-info'>npm install prop-types</span>
					<br/>
					<span className='text-danger fw-bold text-decoration-underline'>Import PropTypes into your component:</span> <span className='text-info'>import PropTypes from "prop-types";</span>
					<br />
					<span className='text-danger fw-bold text-decoration-underline'>Define propTypes for your component:</span> Below your component or class definition, you can specify the expected prop types using the PropTypes object:
					<br />
					<span className='text-danger fw-bold text-decoration-underline'>Usage of the component:</span> When using MyComponent elsewhere in your application, React will check if the provided props match the specified propTypes, and it will warn you in the development environment if there are any mismatches. <br /> <br />

					<p>If you provide incorrect prop types or miss a required prop, you will see warnings in the console during development, which can be very helpful for debugging and preventing potential issues.

					Remember that PropTypes checks are only performed in development mode, so they won't impact the performance of your production build. Its a valuable tool for catching potential issues early in the development process.</p>
					</div>



				</Card.Body>

			</Card>




			<Card className='mt-5 text-success fw-bold'>
				<Card.Header as="h5" className='text-success fw-bold text-center  fs-3'>What difference between nodejs and express js?</Card.Header>

				<Card.Body className=''>

					<div>
					<p>Its common to use Express.js with Node.js. Express.js simplifies the process of building web applications on top of the capabilities provided by Node.js. <br /><br />

					Express is often referred to as a web application framework for Node.js, and many Node.js developers choose Express for building web servers and APIs due to its simplicity and flexibility.In summary, Node.js is the runtime environment that allows you to run JavaScript on the server side, while Express.js is a web application framework built on top of Node.js that simplifies the process of building web applications and APIs. Developers often use them together to take advantage of both the core capabilities of Node.js and the additional features provided by Express.js.</p>



					<br />
					<span className='text-info fw-bold text-decoration-underline'>Node Js:</span>
					<br />
					<span className='text-danger fw-bold text-decoration-underline'>Runtime Environment: </span>
					Node.js is a runtime environment that allows you to execute JavaScript code on the server side. <br />
					It provides an environment for running JavaScript on the server, allowing you to build scalable and fast network applications.
					<br />
					<span className='text-danger fw-bold text-decoration-underline'>Core Functionality:</span> Node.js is designed to handle I/O operations efficiently, making it well-suited for building network applications and APIs. <br />
					Example: You can use Node.js to create web servers, handle file operations, and perform other server-side tasks.
					<br />
					<span className='text-danger fw-bold text-decoration-underline'>Event-Driven:</span> Node.js is event-driven and non-blocking, which means it can handle a large number of simultaneous connections efficiently.
					<br />
					<span className='text-danger fw-bold text-decoration-underline'>No Built-in Web Framework:</span>  Node.js does not come with a built-in web framework. It provides the core functionality for building servers, but developers often use additional libraries or frameworks to simplify the process.
					</div>


					<div>
					<br />
					<span className='text-info fw-bold text-decoration-underline'>Express.js:</span>
					<br />
					<span className='text-danger fw-bold text-decoration-underline'>Web Application Framework: </span>
					Express.js is a web application framework built on top of Node.js. <br />
					Role: It simplifies the process of building web applications and APIs by providing a set of features and tools.
					<br />
					<span className='text-danger fw-bold text-decoration-underline'>Middleware:</span> Express.js uses middleware functions to perform various tasks in the request-response cycle, such as logging, authentication, and error handling.
					<br />
					<span className='text-danger fw-bold text-decoration-underline'>Routing:</span> Express.js includes a routing mechanism that allows developers to define routes for handling different HTTP methods and URIs.
					<br />
					<span className='text-danger fw-bold text-decoration-underline'>Templating Engines:</span>  Express.js supports various templating engines, making it easier to generate dynamic HTML content on the server.

					<span className='text-danger fw-bold text-decoration-underline'>HTTP Utility Methods:</span>  Express.js provides utility methods for handling common HTTP tasks, such as setting headers, sending responses, and parsing request bodies.
					</div>

				</Card.Body>

			</Card>




			<Card className='mt-5 text-success fw-bold'>
				<Card.Header as="h5" className='text-success fw-bold text-center  fs-3'>What is a custom hook, and why will we create a custom hook?</Card.Header>

				<Card.Body className=''>

					<div>
					A custom hook in React is a JavaScript function that starts with the word use and allows you to reuse stateful logic in different components. Custom hooks are a way to extract and share component logic, making it more reusable and easier to manage.
					<br /> <br />
					<span className='text-info fw-bold'>The primary reasons for creating a custom hook in React include:</span>
					<br /><br />
					<span className='text-danger fw-bold text-decoration-underline'>Scenario:</span> When you find yourself duplicating stateful logic across multiple components. <br />
					Example: Imagine you have several components that need to fetch data from an API, manage loading and error states, and handle the updating of data. Instead of repeating this logic in each component, you can create a custom hook to encapsulate this behavior.
					<br />
					<span className='text-danger fw-bold text-decoration-underline'>Abstraction of Complex Logic:</span> When a components logic becomes complex and starts cluttering the component code. <br />
					Example: If you have complex state management, side effects, or other logic that makes your component hard to understand, extracting that logic into a custom hook can make your component code cleaner and more focused on the presentation.
					<br />
					<span className='text-danger fw-bold text-decoration-underline'>Maintainability:</span> When you want to make your codebase more maintainable and modular. <br />
					Example: By organizing related logic into custom hooks, you create a modular structure that makes it easier to understand, test, and update different parts of your application independently. <br />

					<span className='text-danger fw-bold text-decoration-underline'>Sharing Non-Visual Logic:</span>  When the logic you want to reuse doesn't directly involve the visual part of the component (e.g., data fetching, authentication, etc.). <br />
					Example: A custom hook can encapsulate logic related to user authentication. This logic might not directly impact the rendering of the UI but is essential for managing the authentication state across different parts of your application.


					</div>



				</Card.Body>

			</Card>

		</Container>


		</div>
	);
};

export default Blog;