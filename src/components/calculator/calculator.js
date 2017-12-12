import React, { Component } from 'react';
import CalculationPresentation from './presentation';
import CalculationController from './controller';

export class Calculator extends Component {

	constructor(props) {
		super(props);
		this.state = {
			input: '',
			output: ''
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(value) {
		switch (value) {
			case 'Enter': {
				const output = eval(this.state.input).toString();
				this.setState({
					output
				});
				break;
			}
			case 'CE': {
				this.setState({
					input: '',
					output: ''
				});
				break;
			}
			default: {
				this.setState((initState) => ({
					input: initState.input + value
				}));
				break;
			}
		}
		event.preventDefault();
	}
	render() {
		const { input, output } = this.state;
		return(
				<div className='calcWrapper'>
					<div className='case'>
						<CalculationPresentation className='inputField' question={input} answer={output}/>
						<CalculationController className='calcUI' handleClick={this.handleClick} />
					</div>
				</div>
			);
	}
}
