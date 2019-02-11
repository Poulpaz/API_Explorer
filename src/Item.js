import React, { Component } from 'react';
import './Item.css';
import axios from 'axios';

const url = 'https://api.elderscrollslegends.io/v1/cards';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            card: null,
            idCard: this.props.idItem,
            imageUrl: this.props.image
        };
    }

    getCard() {
        axios.get(url + this.state.idCard)
        .then(res => this.setState({
          card: res.data.card
        }));
    }

    componentDidMount() {
        this.getCard();
    }

    render() {
        return (
            <a href={this.props.idItem}>
                <img src={this.state.imageUrl} aria-hidden alt={this.state.imageUrl}/>
            </a>
        )
    }
}

export { Item }