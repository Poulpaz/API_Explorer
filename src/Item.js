import React, { Component } from 'react';
//import './Item.css';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            card: null,
            idCard: this.props.idItem,
            imageUrl: this.props.image
        };
    }

    render() {
        return (
            <button className="itemContent" onClick={this.props.idItem}>
                {this.state.idCard}
            </button>
        )
    }
}

export { Item }