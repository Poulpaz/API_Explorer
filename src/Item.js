import React, { Component } from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
import { Col, Media, Button, Container } from 'reactstrap';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idCard: this.props.idItem,
            imageUrl: this.props.image
        };
    }

    handleClick() {
        this.props.onFavoriteChange(this.state.idCard)
    }

    render() {
        return (
            <Col sm="3">
                <Link to={'/details/' + this.state.idCard}>
                    <Media>
                        <Media src={this.state.imageUrl} width="90%" />
                    </Media>
                </Link>
                <Container>
                    <Col md={{ size: 12, offset: 2 }}>
                        <Button outline color="primary" size="sm" onClick={() => this.handleClick()} >+ Add to favorite</Button>
                    </Col>
                </Container>
            </Col>
        )
    }
}

export { Item }