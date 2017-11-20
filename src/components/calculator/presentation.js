import React from 'react';

const TextBox = ({ value, className }) => {
	return(
		<div>
			<input
				type='text'
				value={value}
				readOnly
				className={className}
			/>
		</div>
	);
}
const presenter = ({ question, answer, className }) => {
	return(
		<div>
			<TextBox className={className} value={question}/>
			<TextBox className={className} value={answer}/>
		</div>
	)
}
export default presenter;