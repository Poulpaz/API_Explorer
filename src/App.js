import React, { Component } from 'react';
import './App.css';
import { List } from './List';
import { SearchBar } from './SearchBar';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <img src="https://www.logolynx.com/images/logolynx/5b/5bbc9085e371a4297a194f82a9103630.png" alt="logo" />
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
