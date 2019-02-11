import React, { Component } from 'react';
import './PageList.css';
import { Item } from "./Item";
import { SearchBar } from "./SearchBar";
import axios from 'axios';

const url = 'https://api.elderscrollslegends.io/v1/cards';

class PageList extends Component {
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

    componentWillMount() {
        this.fetchCards();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <SearchBar />
                </header>
                <body className="App-body">
                    <ul className="List-ul">
                        {this.state.cards.map(card =>
                            <Item idItem={card.id} image={card.imageUrl} />
                        )}
                    </ul>
                </body>
            </div>
        )
    }
}

export { PageList }