import classes from './LineAndCircle.module.css';
const Line = () => {
	return (
		<div className={classes.lineBox}>
			<hr className={classes.line}></hr>
			<button className={classes.blackCircle}>okey</button>
		</div>
	);
};
export default Line;
