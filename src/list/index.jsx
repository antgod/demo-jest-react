import React, { Component } from 'react';

import Item from '../item'
import './index.css';
import fruits from '../fruits';

class List extends Component {
	render() {
        const keyword = this.props.keyword;
        const fruitsToShow = fruits.filter(item => {
            return item.includes(keyword);
        });
		return (
			<ul className="list">
				{fruitsToShow.map((item, index) => {
					return <Item item={item} key={index} />
				})}
			</ul>
		)
	}
}

export default List;
