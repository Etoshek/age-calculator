import  { useState } from 'react';


const SaveDate = () => {
    const [dayInput, setDayInput] = useState('');
    
	const handleSaveDate = (e) => {
		setDayInput(e.target.value);
	};

};

export default SaveDate;

