import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import IndexPage from "./routes/IndexPage";

class App extends Component {
  render() {
    return (
        <body>
        <Router>
          <div className="App">
              <Route path="/" exact component={IndexPage}/>
          </div>
        </Router>
        </body>
    );
  }
}

export default App;
