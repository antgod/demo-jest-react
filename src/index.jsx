import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './style.css';

import List from './list';
import Input from './input';
import fruits from './fruits';

class App extends Component {

	constructor() {
		super();
		this.state = {
			keyword: ''
		}
	}

	onChange(value) {
		this.setState({
			keyword: value
		});
	}

	render() {
        const keyword = this.state.keyword;
		return (
			<div className="app">
				<h1>Find My Fruit</h1>
				<Input onChange={this.onChange.bind(this)} />
				<List keyword={keyword}/>
			</div>
		)
	}
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);
