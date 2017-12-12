import React, { Component } from 'react';
import './App.css';
import Calculator from './components/calculator';

// <img src={logo} className="App-logo" alt="logo" />
export default class App extends Component {
	render() {
		return (
			<div className='mainBody'>
				<Calculator />
			</div>
		);
	}
}