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

    abc = (text) => () =>{
        console.log("text");
      }

    fetchCards() {
        axios.get(url)
        .then(res => this.setState({
          cards: res.data.cards
        }));
    }

    fetchCardsWithSearch(event){
        console.log("test")
        this.setState(state => {
            var updatedList = this.state.cards;
            updatedList = updatedList.filter(function(item){
            return item.toLowerCase().search(
                event.target.value.toLowerCase()) !== -1;
            });
            return {
                cards: updatedList
            }
        });
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