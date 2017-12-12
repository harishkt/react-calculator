import React from 'react';

const Button = ({ value, className, handleClick }) => {
	const clickHandler = () => handleClick(value);
	return(
		<button
			type='button' className={className} onClick={clickHandler}
		>{value}
		</button>
	)
}
const controller = ({ handleClick, className }) => {
	return(
		<div>
			<div>
				<Button value='7' handleClick={handleClick} className={className}/>
				<Button value='8' handleClick={handleClick} className={className}/>
				<Button value='9' handleClick={handleClick} className={className}/>
				<Button value='/' handleClick={handleClick} className={className}/>
			</div>
			<div>
				<Button value='4' handleClick={handleClick} className={className}/>
				<Button value='5' handleClick={handleClick} className={className}/>
				<Button value='6' handleClick={handleClick} className={className}/>
				<Button value='*' handleClick={handleClick} className={className}/>
			</div>
			<div>
				<Button value='1' handleClick={handleClick} className={className}/>
				<Button value='2' handleClick={handleClick} className={className}/>
				<Button value='3' handleClick={handleClick} className={className}/>
				<Button value='+' handleClick={handleClick} className={className}/>
			</div>
			<div>
				<Button value='0' handleClick={handleClick} className={className}/>
				<Button value='.' handleClick={handleClick} className={className}/>
				<Button value='CE' handleClick={handleClick} className={className}/>
				<Button value='-' handleClick={handleClick} className={className}/>
			</div>
			<div>
				<Button value='Enter' handleClick={handleClick} className={className} />
			</div>
		</div>
	)
}
export default controller;