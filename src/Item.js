import React, { Component } from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
import { Col, Media, Button } from 'reactstrap';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idCard: this.props.idItem,
            imageUrl: this.props.image
        };
    }

    render() {
        return (
            <Col sm="2">
                <Link to={'/details/' + this.state.idCard}>
                    <Media>
                        <Media src={this.state.imageUrl} width="90%" />
                    </Media>
                </Link>
            </Col>
        )
    }
}

export { Item }