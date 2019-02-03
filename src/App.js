import React, { Component } from 'react';
import './App.css';
import { List } from './List';
import { SearchBar } from './SearchBar';

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar/>
        </header>
        <body className="App-body">
          <List/>
        </body>
      </div>
    )
  }
}

export default App;
