import React from 'react';

const userOutput = (props) => {
	return(
		<div className="UserOutput">
			<p> Username: {props.userName} </p>
			<p> This is paragraph one. </p>
			<p> This is paragraph two. </p>
		</div>

	);
};


export default userOutput;