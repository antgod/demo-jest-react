import React, { Component } from 'react';

// import './index.css';

class Item extends Component {

    constructor() {
        super();
        this.state = {
            isSelected: false
        }
    }

    handleClick() {
        this.setState({
            isSelected: !this.state.isSelected
        });
    }

    render() {
        let isSelected = this.state.isSelected;
        let selectedCls = isSelected ? ' item-selected' : '';
        return (
            <li
            	className={'item' + selectedCls}
            	onClick={this.handleClick.bind(this)}
            >
                <span className="child">child</span>
                {this.props.item}
            </li>
        );
    }
}

export default Item;
