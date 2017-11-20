import React, { Component } from 'react';
import CalculationPresentation from './presentation';
import CalculationController from './controller';

export class Calculator extends Component {

	constructor(props) {
		super(props);
		this.state = {
			input: '',
			output: ''
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		const value = event.target.value;
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
		console.log(`In render - input is ${input} and output is ${output}`);
		return(
			<div>
				<CalculationPresentation question={input} answer={output}/>
				<CalculationController handleClick={this.handleClick} />
			</div>
			);
	}
}
