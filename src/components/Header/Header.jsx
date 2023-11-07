import React from 'react';
import moment from 'moment';

const Header = () => {
	return (
		<div>
			<div className="text-center">
				<h2>Yummmy Food's Ocean</h2>
				<p><small>We Provide American Chef Recipe</small></p>
				<p>{moment().format("dddd, D MMMM, YYYY")}</p>
			</div>
		</div>
	);
};

export default Header;