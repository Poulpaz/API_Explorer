import React, { Component } from 'react';
import { PageList } from './PageList';
import './PageList.css';

class SearchBar extends Component {

    handleChange(text) {
        console.log(text)
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