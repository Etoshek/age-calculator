import classes from './Result.module.css';
const Result = () => {
	
	return (
		<>
			<div className={classes.calculatorFrame}>
				<div className={classes.ageResult}>38</div>
				<div className={classes.dateResult}>years</div>
			</div>
			<div className={classes.calculatorFrame}>
				<div className={classes.ageResult}>3</div>
				<div className={classes.dateResult}>month</div>
			</div>
			<div className={classes.calculatorFrame}>
				<div className={classes.ageResult}>26</div>
				<div className={classes.dateResult}>days</div>
			</div>
		</>
	);
};

export default Result;
