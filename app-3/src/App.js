import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = { 
      userInput: '',
      list:[
        'spaghetti',
        'ice cream',
        'sushi',
        'bologna',
        'cheese'
    ]    
  }
}

  handleListFilter(value) {
    
    this.setState({
      userInput: value
    })
    
  }

  render() {
    let listToDisplay = this.state.list.filter((e) => {return e.includes(this.state.userInput)}).map((e,i) => {return <h2 key={i}>{e}</h2>})
    return (
      <div className="App">
       <input onChange={(e)=>{this.handleListFilter(e.target.value)}} type='text' placeholder='Input Item Desired Here' />
       {listToDisplay}

      </div>
    );
  }
}

export default App;
