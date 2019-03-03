import React, { Component } from 'react';
import ListPresidents from './components/ListPresidents';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <ListPresidents />
        </header>
      </div>
    );
  }
}

export default App;
