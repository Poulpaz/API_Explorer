import React, { Component } from 'react';
import './PageList.css';

class SearchBar extends Component {

    handleChange(text) {
        this.props.onSearchChange(text)
      }

    render() {
        return (
            <div id="cover">
                <input type="text" placeholder="Search" value={this.props.search} onChange={ (event) => this.handleChange(event.target.value)}/>
            </div>
        )
    }
}

export { SearchBar }