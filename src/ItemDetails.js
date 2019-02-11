import React, { Component } from 'react';
//import './ItemDetails.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const url = 'https://api.elderscrollslegends.io/v1/cards/';

class ItemDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            card: null,
            idCard: props.match.params.idCard
        };
    }

    getCard() {
        axios.get(url + this.state.idCard)
            .then(res => this.setState({
                card: res.data.card
            }));
    }

    componentWillMount() {
        this.getCard();
    }

    render() {
        return (
            <div>
                <Link to="/">
                    <button>{this.state.idCard}</button>
                </Link>
                <h1>{this.state.card.name}</h1>
            </div>
        )
    }
}

export { ItemDetails }