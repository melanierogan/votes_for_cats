import React, { Component } from 'react';
import './App.css';
import ArticleTitles from './ArticleTitles'
import ArticleTitles2 from './ArticleTitles2'

class App extends Component {
  render() {
    return (
      
      <div className="App">
        <header className="App-header">
         <ArticleTitles title="Vote for me"></ArticleTitles>
         <ArticleTitles2 title="Or me"></ArticleTitles2>
        </header>
      </div>
    );
  }
}

export default App;
