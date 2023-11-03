import React, { useState } from 'react';
import classes from './CheckIfInputIsEmpty.module.css';

const [message, setMessage] = useState(''); 
function CheckIfInputIsEmpty() {
const handleChange = (event) => {
	setMessage(event.target.value);
};

	const handleClick = (event) => {
		event.preventDefault();

		if (message.trim().length !== 0) {
			console.log('input value is NOT empty');
		} else {
			console.log('input value is empty');
		}
	};
	 function OkButton() {
		return (
			<div className={classes.lineBox}>
				<div className={classes.line}></div>
				<button className={classes.button} onClick={handleChange}>
					Ok
				</button>
			</div>
		);
	}

}


export default CheckIfInputIsEmpty;
