import React, { Component } from 'react';
import './PageList.css';
import { Item } from "./Item";
import { SearchBar } from "./SearchBar";
import axios from 'axios';
import classnames from 'classnames';
import { Container, Row, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';

const url = 'https://api.elderscrollslegends.io/v1/cards';

class PageList extends Component {
    constructor() {
        super();
        this.toggle = this.toggle.bind(this);
        this.state = {
            cards: [],
            favoriteCards: [],
            search: '',
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    clickFavorite(idCard) {
        if (this.isCardFavorite(idCard)) {
            this.addToFavorite(idCard)
        } else {
            this.deleteToFavorite(idCard)
        }
    }

    isCardFavorite(idCard) {
        return true
    }

    addToFavorite(params) {
        console.log("test")
        console.log(params)
        axios.get(url + "/" + params)
            .then(res => {
                var updateList = this.state.favoriteCards
                updateList.push(res.data.card)
                this.setState({
                    favoriteCards: updateList
                })
            });
    }

    deleteToFavorite(params) {
        console.log("test2")
    }

    isFavorite(params) {

    }

    handleSearchChange(text) {
        this.setState({ search: text });
        if (text === "") {
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

    componentDidMount() {
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
                    <Nav tabs>
                        <NavItem>
                            <NavLink className={classnames({ active: this.state.activeTab === '1' })}
                                onClick={() => { this.toggle('1'); }}>
                                Liste des cartes
                        </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={classnames({ active: this.state.activeTab === '2' })}
                                onClick={() => { this.toggle('2'); }}>
                                Favoris
                        </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            <Container>
                                <h1><br /></h1>
                                <Row>
                                    {this.state.cards.map(card =>
                                        <Item idItem={card.id} image={card.imageUrl} onFavoriteChange={(idCard) => this.clickFavorite(idCard)} />
                                    )}
                                </Row>
                                <h1><br /></h1>
                            </Container>
                        </TabPane>
                        <TabPane tabId="2">
                            <Container>
                                <Row>
                                    {this.state.favoriteCards.map(favoriteCard =>
                                        <Item idItem={favoriteCard.id} image={favoriteCard.imageUrl} />
                                    )}
                                </Row>
                            </Container>
                        </TabPane>
                    </TabContent>
                </body>
            </div>
        )
    }
}

export { PageList }