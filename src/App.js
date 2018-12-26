import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import RouterConfig from "./routes/router-config";

class App extends Component {
  render() {
    return (
        <body>
        <Router>
          <div className="App">
            <header className="App-header">
              <Navbar/>
              header
            </header>
            <div className="App-body">
              <RouterConfig/>
            </div>
            <footer className="App-footer">
              <Footer/>
            </footer>
          </div>
        </Router>
        </body>
    );
  }
}

export default App;
