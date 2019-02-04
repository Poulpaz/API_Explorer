import React, { Component } from 'react';
//import './SearchBar.css';

class SearchBar extends Component {

    render() {
        return (
            <form>
                <input type="text" className="SearchBar-input">

                </input>
                <button formAction="get" className="SearchBar-button">
                    SEARCH
                </button>
            </form>
        )
    }
}

export { SearchBar }