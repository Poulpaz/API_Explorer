import React, { Component } from 'react';
import { List } from './List';
import './App.css';

class SearchBar extends Component {

    handleChange(text) {
        console.log(text)
        new List().abc(text)
      }

    render() {
        return (
            <div id="cover">
                <input type="text" placeholder="Search" onChange={ (event) => this.handleChange(event.target.value)}/>
            </div>
        )
    }
}

export { SearchBar }