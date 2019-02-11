import React, { Component } from 'react';
import { List } from './List';
import './App.css';

class SearchBar extends Component {

    render() {
        return (
            <div id="cover">
                <input type="text" placeholder="Search" onChange={new List().abc()}/>
            </div>
        )
    }
}

export { SearchBar }