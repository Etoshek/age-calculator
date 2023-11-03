import classes from './ResultAgeCalculate.module.css';

const ResultAgeCalculate = () => {
	return (
		<>
			<div className={classes.calculatorFrame}>
				<p className={classes.ageResult}>38</p>
				<p className={classes.dateResult}>years</p>
			</div>

			<div className={classes.calculatorFrame}>
				<p className={classes.ageResult}>09</p>
				<p className={classes.dateResult}>months</p>
			</div>

			<div className={classes.calculatorFrame}>
				<p className={classes.ageResult}>23</p>
				<p className={classes.dateResult}>days</p>
			</div>
		</>
	);
};
export default ResultAgeCalculate;
