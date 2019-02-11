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

    abc = (text) => () =>{
            console.log("text");
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
                    <img src="https://www.logolynx.com/images/logolynx/5b/5bbc9085e371a4297a194f82a9103630.png" alt="logo" />
                    <SearchBar/>
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