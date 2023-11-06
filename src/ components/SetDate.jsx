import { useState } from 'react';
import classes from './SetDate.module.css';
import CheckIfInputIsEmpty from './CheckIfInputIsEmpty';

const SetDate = () => {
	const [dayInput, setDayInput] = useState('');
	const [monthInput, setMonthInput] = useState('');
	const [yearInput, setYearInput] = useState('');

	const handleSaveDate = (e) => {
		const addZero = e.target.value;
		if (addZero < 10) {
			setDayInput(`0${addZero}`);
		} else {
			setDayInput(e.target.value);
		}
	};
	const handleSaveMonth = (e) => {
		setMonthInput(e.target.value);
	};
	const handleSaveYear = (e) => {
		setYearInput(e.target.value);
	};

	const handleAgeCalculate = () => {
		console.log(yearInput, monthInput, dayInput);
	};
	CheckIfInputIsEmpty(handleAgeCalculate());

	const currentDate = new Date();

	const [showToday, setShowToday] = useState(true);

	return (
		<form className={classes.form}>
			<div className={classes.contentForm}>
				<label htmlFor='date' className={classes.dateText}>
					day
				</label>
				<input
					onChange={handleSaveDate}
					className={classes.dateTextInput}
					id='day'
					placeholder='dd'
					required='required'
					min='1'
					max='31'
					maxLength={2}
				/>
				{dayInput}

				<label htmlFor='month' className={classes.dateText}>
					month
				</label>
				<input
					className={classes.dateTextInput}
					id='month'
					placeholder='mm'
					onChange={handleSaveMonth}
					required='required'
					min='1'
					max='31'
					maxLength={2}
				/>
				{monthInput}

				<label htmlFor='year' className={classes.dateText}>
					year
				</label>
				<input
					className={classes.dateTextInput}
					id='year'
					placeholder='yyyy'
					onChange={handleSaveYear}
					required='required'
					min='1'
					max='2090'
					maxLength={4}
				/>
				{yearInput}
			</div>
			<CheckIfInputIsEmpty />

			<div className={classes.today}>
				<div className={classes.todayDate}>
					{/* {' '} */}
					{showToday && <p>Show today's date</p> || <p>Today's Date: {currentDate.toDateString()}</p>}
					
				</div>
				<button className={classes.todayBtn} type='button' onClick={()=>setShowToday(!showToday)}>
					{showToday === true? 'Show date': 'Hide date'}
					</button>
			</div>
		</form>
	);
};

export default SetDate;
