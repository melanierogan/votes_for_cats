import React, { Component } from 'react';
import './App.css';
import ArticleTitles from './ArticleTitles'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <ArticleTitles title="Vote for me"></ArticleTitles>
         <ArticleTitles title="Or me"></ArticleTitles>
        </header>
      </div>
    );
  }
}

export default App;
