import SetDate from './SetDate';
import ResultAgeCalculate from './ResultAgeCalculate'
// import CheckIfInputIsEmpty from './CheckIfInputIsEmpty';
import OkButton from './CheckIfInputIsEmpty'

import classes from './WhiteBoard.module.css';

const WhiteBoard = () => {
	return (
		<>
			<div className={classes.whiteBoard}>
				<SetDate />
				<ResultAgeCalculate />
				{/* <CheckIfInputIsEmpty/> */}
				<OkButton/>
			</div>
		</>
	);
};

export default WhiteBoard;
