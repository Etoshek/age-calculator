import React, { useState } from 'react';
import classes from './CheckIfInputIsEmpty.module.css';

function CheckIfInputIsEmpty() {
	const [message, setMessage] = useState('');
	const handleChange = (event) => {
		handleClick()
		setMessage(event.target.value);
		console.log('message');
	};

	const handleClick = (event) => {
		event.preventDefault();

		if (message.trim().length !== 0) {
			console.log('input value is NOT empty');
		} else {
			console.log('input value is empty');
		}
	};
	return (
		<div className={classes.lineBox}>
			<div className={classes.line}></div>
			<button className={classes.button} onClick={handleChange}>
				Ok
			</button>
		</div>
	);
}

export default CheckIfInputIsEmpty;
