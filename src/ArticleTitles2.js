import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {clicks : 0 };
  }
  addClick() {
    this.setState({clicks: this.state.clicks +1})
  }


  render() {
    return (
      <div>
        <h1>Cats - {this.props.title}</h1>
        <img src='https://placekitten.com/g/240/300' alt="meaningful cat"></img>
        <p><button onClick={this.addClick.bind(this)}>{this.state.clicks}</button></p>        
      </div>

    );
  }
}

export default App;
