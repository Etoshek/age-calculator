import classes from './SetDate.module.css';

const SetDate = () => {
	return (
		<div className={classes.dateFrame}>
			<form>
				<label for='date' className={classes.dateText}>
					<p>day</p>
					<input
						className={classes.dateTextInput}
						type='number'
						id='day'
						placeholder='dd'
						required='required'
						min='1'
						max='31'
					/>
				</label>

				<label for='month' className={classes.dateText}>
					<p>month</p>
					<input
						className={classes.dateTextInput}
						type='number'
						id='month'
						placeholder='mm'
						required='required'
						min='1'
						max='12'
					/>
				</label>

				<label for='year' className={classes.dateText}>
					<p>year</p>
					<input
						className={classes.dateTextInput}
						type='number'
						id='year'
						placeholder='yyyy'
						required='required'
						min='1990'
						max='2090'
					/>
				</label>
			</form>
		</div>
	);
};

export default SetDate;
