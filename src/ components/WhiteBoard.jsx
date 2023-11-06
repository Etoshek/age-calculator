import SetDate from './SetDate';
import ResultAgeCalculate from './ResultAgeCalculate'

import classes from './WhiteBoard.module.css';

const WhiteBoard = () => {
	return (
		<>
			<div className={classes.whiteBoard}>
				<SetDate />
				<ResultAgeCalculate />
			</div>
		</>
	);
};

export default WhiteBoard;
