import React, { Component } from 'react';
import './PageList.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card, CardText, CardBody, CardTitle, Button, Container, Row, Col, Badge } from 'reactstrap';

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

    componentDidMount() {
        this.getCard();
    }

    render() {
        return (
            <div>
                <div className="App-header">
                    <img src="https://www.logolynx.com/images/logolynx/5b/5bbc9085e371a4297a194f82a9103630.png" alt="logo" />
                </div>
                <div>
                    <Link to="/">
                        <Button color="primary" size="lg" block>Back to Items' List</Button>
                    </Link>
                </div>
                <div>
                    <Card align="center">
                        <CardTitle>
                            <h1><br /></h1>
                            <h1 className="text-muted">{this.state.card.name}</h1>
                        </CardTitle>
                        <CardBody>
                            <CardText>
                                <Container>
                                    <Row>
                                        <Col>
                                            <img src={this.state.card.imageUrl} alt="Card imoage cap" width="18%" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <h1><br /></h1>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <h5 className="text-muted">Rarity</h5>
                                        </Col>
                                        <Col>
                                            <h5 className="text-muted">Type</h5>
                                        </Col>
                                        <Col>
                                            <h5 className="text-muted">Subtype(s)</h5>
                                        </Col>
                                        <Col>
                                            <h5 className="text-muted">Mana Cost</h5>
                                        </Col>
                                        <Col>
                                            <h5 className="text-muted">Power</h5>
                                        </Col>
                                        <Col>
                                            <h5 className="text-muted">Health</h5>
                                        </Col>
                                        <Col>
                                            <h5 className="text-muted">Attributes</h5>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Badge color="primary" pill>{this.state.card.rarity}</Badge>
                                        </Col>
                                        <Col>
                                            <Badge color="primary" pill>{this.state.card.type}</Badge>
                                        </Col>
                                        <Col>
                                            <ul className="List-ul">{this.state.subtypes ? this.state.subtypes.map(item => (
                                                <Badge color="primary" pill><li key={item}>{item}</li></Badge>
                                            )) : "N/A"}</ul>
                                        </Col>
                                        <Col>
                                            <Badge color="primary" pill>{this.state.card.cost}</Badge>
                                        </Col>
                                        <Col>
                                            <Badge color="primary" pill>{this.state.card.power ? this.state.card.power : "N/A"}</Badge>
                                        </Col>
                                        <Col>
                                            <Badge color="primary" pill>{this.state.card.health ? this.state.card.health
                                                : "N/A"}</Badge>
                                        </Col>
                                        <Col>
                                            <ul className="List-ul">{this.state.attributes ? this.state.attributes.map(item => (
                                                <Badge color="primary" pill><li key={item}>{item}</li></Badge>
                                            )) : null}</ul>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <h1><br /></h1>
                                    </Row>
                                    <Row>
                                        <Col>
                                        <h5 className="text-muted">{this.state.card.text}</h5>
                                        </Col>
                                    </Row>
                                </Container>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>


            </div>
        )
    }
}

export { ItemDetails }