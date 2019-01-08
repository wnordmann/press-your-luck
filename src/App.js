import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      image: ''
    };
  }
  render() {

    fetch('https://gph.is/1LaRgeN')
    .then(response => response.text())
    .then(text => {
      const parser = new DOMParser();
      const htmlDocument = parser.parseFromString(text, "text/html");
      const section = htmlDocument.documentElement.querySelector("head");
      const meta = section.querySelector('meta[property="og:image"]');
      console.log(meta.content);
      this.setState({image: meta.content});
    })
    // fetch('https://gph.is/1LaRgeN')
    //   .then(res => res.text())
    //   .then(res => {
    //     console.log(res);
    // });
    return (
      <div className="App">
        <header className="App-header">
          <img src={this.state.image} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
