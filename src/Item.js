import React, { Component } from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
import { Col, Media, Button, Row, Container } from 'reactstrap';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idCard: this.props.idItem,
            imageUrl: this.props.image,
            isFavorite: this.props.isFavorite
        };
    }

    handleClick() {
        var state = this.state.isFavorite ? false : true
        this.setState({
            isFavorite: state
        })
        this.props.onFavoriteChange(this.state.idCard)
        console.log(this.state.idCard)
    }

    render() {
        return (
            <Col sm="3">
                <Row>
                    <Link to={'/details/' + this.state.idCard}>
                        <Media>
                            <Media src={this.state.imageUrl} width="90%" />
                        </Media>
                    </Link>
                </Row>
                { this.props.isFavoriteList ? null : <Row>
                    <Container>
                        <Col md={{ size: 12, offset: 2 }}>
                            { this.state.isFavorite ? <Button outline color="primary" size="sm" onClick={ () => this.handleClick() } >- Remove to favorite</Button> :
                            <Button outline color="primary" size="sm" onClick={ () => this.handleClick() } >+ Add to favorite</Button> }
                        </Col>
                    </Container>
                </Row>
                }
            </Col>
        )
    }
}

export { Item }