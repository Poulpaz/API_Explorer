import React, { Component } from 'react';
import './PageList.css';
import { Item } from "./Item";
import { SearchBar } from "./SearchBar";
import axios from 'axios';
import { Container, Row, Col, Button } from 'reactstrap';

const url = 'https://api.elderscrollslegends.io/v1/cards';

class PageList extends Component {
    constructor() {
        super();
        this.state = {
            cards: [],
            search: ''
        };
    }

    handleSearchChange(text) {
    		this.setState({ search: text });
    		if (text == ""){
                this.fetchCards()
            } else {
                this.fetchCardsWithSearch(text)
            }
        }

    fetchCards() {
        axios.get(url)
            .then(res => {
                this.setState({
                    cards: []
                })
                this.setState({
                    cards: res.data.cards
                })
            });
    }

    fetchCardsWithSearch(text) {
            axios.get(url)
                .then(res => {
                    var updateList = res.data.cards
                    updateList = updateList.filter((item => {
                     return item.name.toLowerCase().search(
                     text.toLowerCase()) !== -1;
                     }));
                    this.setState({
                       cards: []
                    })
                    this.setState({
                        cards: updateList
                    })
                });
        }

    componentWillMount() {
        this.fetchCards();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src="https://www.logolynx.com/images/logolynx/5b/5bbc9085e371a4297a194f82a9103630.png" alt="logo" />
                    <SearchBar search={this.state.search} onSearchChange={(text) => this.handleSearchChange(text)} />
                </header>
                <body className="App-body">
                    <Row>
                        <Col sm="1"></Col>
                        <Col sm="10">{this.state.cards.map(card =>
                            <Item idItem={card.id} image={card.imageUrl} />
                        )}
                        </Col>
                        <Col sm="1"></Col>
                    </Row>
                </body>
            </div>
        )
    }
}

export { PageList }