import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      array: ['this', 'is','so','much','fun']
    }
  }


  render() {
    let thingsToDisplay = this.state.array.map((e,i) => {return (<h2 key={i}>{e}</h2>)})
    return (
      <div className="App">
      {thingsToDisplay}
      </div>
    );
  }
}

export default App;
