import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super ()

    this.state = {
      text: ''
    }

    this.handleUpdateName = this.handleUpdateName.bind(this)
  }

  handleUpdateName(value) {
    this.setState({
      text: value
    })
  }

  render() {
    return (
      <div className="App">
        <input onChange={(e) => this.handleUpdateName(e.target.value)} type='text' placeholder='Input Text Here'/>
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default App;
