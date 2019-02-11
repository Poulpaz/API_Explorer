import React, { Component } from 'react';
import './List.css';
import { Item } from "./Item";
import axios from 'axios';

const url = 'https://api.elderscrollslegends.io/v1/cards';

class List extends Component {
    constructor() {
        super();
        this.state = {
            cards: []
        };
    }

    fetchCards() {
        axios.get(url)
        .then(res => this.setState({
          cards: res.data.cards
        }));
    }

    componentDidMount() {
        this.fetchCards();
    }

    render() {
        return (
            <ul className="List-ul">
                { this.state.cards.map(card =>
                    <Item idItem={card.id} image={card.imageUrl}/>
                )}
            </ul>
        )
    }
}

export { List }