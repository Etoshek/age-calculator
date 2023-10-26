import SetDate from './SetDate';
import Line from './LineAndCircle';
import Result from './Result';
import classes from './WhiteBoard.module.css';

const WhiteBoard = () => {
	return (
		<>
			<div className={classes.whiteBoard}>
				<SetDate />
				<Line />
				<Result />
			</div>
		</>
	);
};

export default WhiteBoard;
