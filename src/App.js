import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <body>
        <Router>
          <div className="App">
            <header className="App-header">
              header
            </header>
            <section>
              body
            </section>
            <footer>
              footer
            </footer>
          </div>
        </Router>
        </body>
    );
  }
}

export default App;
