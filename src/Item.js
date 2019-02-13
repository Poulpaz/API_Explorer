import React, { Component } from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idCard: this.props.idItem,
            imageUrl: this.props.image
        };
    }

    render() {
        return (
            <Link to={'/details/' + this.state.idCard}>
                <img src={this.state.imageUrl} aria-hidden alt={this.state.imageUrl}/>
            </Link>
        )
    }
}

export { Item }