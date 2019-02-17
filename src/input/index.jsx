import React, { Component } from 'react';

import './index.css';

class Input extends Component {

    handleKeyUp(event) {
        const value = event.target.value;
        this.props.onChange(value);
    }

    componentDidMount() {
        this.input.focus();
    }

    render() {
        return (
            <div className="input-container">
                <input
                    onKeyUp={this.handleKeyUp.bind(this)}
                    ref={input => this.input = input}
                />
            </div>
        )
    }

}

export default Input;
