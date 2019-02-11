import React, { Component } from 'react';
import './PageList.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';

const url = 'https://api.elderscrollslegends.io/v1/cards/';

class ItemDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            card: [],
            attributes: [],
            subtypes: [],
            idCard: props.match.params.idCard
        };
    }

    getCard() {
        axios.get(url + this.state.idCard)
            .then(res => this.setState({
                card: res.data.card,
                attributes: res.data.card.attributes,
                subtypes: res.data.card.subtypes
            }));
    }

    componentWillMount() {
        this.getCard();
    }

    render() {
        return (
            <div className=".App">
                <header className="App-header">
                    <Link to="/">
                        <Button color="primary" size="lg" block>Back to Item's List</Button>
                    </Link>
                    <h1>{this.state.card.name}</h1>
                </header>
                <body className=".App-body">
                    <Container>
                        <img src={this.state.card.imageUrl} aria-hidden alt={this.state.card.imageUrl} />

                        <p>{this.state.card.rarity}</p>
                        <p>{this.state.card.type}</p>
                        <ul className="List-ul">{this.state.subtypes ? this.state.subtypes.map(item => (
                            <li key={item}>{item}</li>
                        )) : null}</ul>
                        <p>{this.state.card.cost}</p>
                        <p>{this.state.card.power}</p>
                        <p>{this.state.card.health}</p>
                        <ul className="List-ul">{this.state.attributes ? this.state.attributes.map(item => (
                            <li key={item}>{item}</li>
                        )) : null}</ul>
                        <p>{this.state.card.text}</p>
                    </Container>
                </body>
            </div>
        )
    }
}

export { ItemDetails }